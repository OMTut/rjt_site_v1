"use server"
import { signIn } from "@/lib/auth"

export const handleGithubLogin = async (e) => {

   await signIn("github")
 }