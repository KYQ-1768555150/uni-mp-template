import 'vue'
import Guess from '@/components/Guess/Guess.vue'
import wSwiper from '@/components/wSwiper/wSwiper.vue'

declare module 'vue' {
  export interface GlobalComponents {
    wSwiper: typeof wSwiper
    wGuess: typeof Guess
  }
}

// 组件实例类型
export type GuessInstance = InstanceType<typeof Guess>
