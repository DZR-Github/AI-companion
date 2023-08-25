/*
 * @Author: zrDeng
 * @Date: 2023-08-24 21:27:52
 * @LastEditTime: 2023-08-24 21:28:04
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \AI-companion\ai-companion\middleware.ts
 */
import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 