import { useAutorisationStore } from "@/stores/Autorisation";
import { useUserStore } from "@/stores/User";

export function clear() {
    const userStore = useUserStore()
    const autorisationStore = useAutorisationStore()
    userStore.$reset();
    autorisationStore.$reset()
    
}