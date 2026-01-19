import { config as defaultConfig } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'
import { themes } from './themes' // ← IMPORTANTE: importa i temi

export const config = createTamagui({
  ...defaultConfig,
  themes, // ← aggiungi i tuoi temi custom
})

type OurConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}