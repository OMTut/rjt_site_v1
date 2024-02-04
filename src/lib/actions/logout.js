"use server"
import { signOut } from "@/lib/auth"

export const handleLogout = async (e) => {

   await signOut()
 }