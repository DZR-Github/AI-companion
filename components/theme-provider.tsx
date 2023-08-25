/*
 * @Author: zrDeng
 * @Date: 2023-08-24 23:13:57
 * @LastEditTime: 2023-08-24 23:14:08
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \ai-companion\components\theme-provider.tsx
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
