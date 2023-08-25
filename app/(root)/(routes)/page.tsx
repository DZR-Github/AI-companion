import { UserButton } from "@clerk/nextjs"

/*
 * @Author: zrDeng
 * @Date: 2023-08-24 19:55:37
 * @LastEditTime: 2023-08-24 22:18:44
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \ai-companion\app\(root)\(routes)\page.tsx
 */
const RootPage = () => {
  return <div>
    <UserButton afterSignOutUrl="/"></UserButton>
  </div>
}

export default RootPage
