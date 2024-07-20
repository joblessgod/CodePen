import { toast } from "sonner"

export const handleError = (error: any) => {
    console.log(error.data.message)
    toast.warning("Error: " + error.data.message)
}