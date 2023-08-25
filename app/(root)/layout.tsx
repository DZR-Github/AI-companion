/*
 * @Author: zrDeng
 * @Date: 2023-08-24 22:26:15
 * @LastEditTime: 2023-08-24 22:33:37
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \ai-companion\app\(root)\layout.tsx
 */
import Navbar from '@/components/navbar'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <Navbar />
      <main className='md:pl-20 pt-16 h-full'>{children}</main>
    </div>
  )
}

export default RootLayout
