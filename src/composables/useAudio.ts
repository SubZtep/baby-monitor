import { useAudioStore } from "~/stores/audio"

function dBRms(buffer: Float32Array) {
  const len = buffer.length
  let sum = 0
  let x: number
  for (let i = 0; i < len; i++) {
    x = buffer[i]
    sum += x * x
  }
  if (sum === 0) {
    return undefined
  }
  return 10 * Math.log10(sum / len)
}

export function useAudio(stream: Ref<MediaStream | undefined>) {
  const audioStore = useAudioStore()

  const ctx = new AudioContext()
  const analyser = ctx.createAnalyser()
  analyser.fftSize = audioStore.fftSize
  const dest = ctx.createMediaStreamDestination()
  analyser.connect(dest)

  let source: MediaStreamAudioSourceNode | undefined
  const dB = ref<number | undefined>()

  const { pause, resume } = useRafFn(
    () => {
      const sampleBuffer = new Float32Array(analyser.fftSize)
      analyser.getFloatTimeDomainData(sampleBuffer)
      set(dB, dBRms(sampleBuffer))
    },
    { immediate: false }
  )

  watch(stream, newStream => {
    if (newStream) {
      source = ctx.createMediaStreamSource(newStream)
      source.connect(analyser)
      resume()
    } else if (source) {
      pause()
      set(dB, undefined)
      source.disconnect()
      source = undefined
    }
  })

  return {
    dB,
  }
}
