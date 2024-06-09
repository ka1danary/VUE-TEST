import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

export const useHeaderStore = defineStore('headerStore', () => {

    const homeIcon = ref(true)
    const settingsIcon = ref(false)
    const alertIcon = ref(true)

    const setStateTrueForHome = () => {
        homeIcon.value = true
        settingsIcon.value = false
    }
    const setStateTrueForSettings = () => {
        settingsIcon.value = true
        homeIcon.value = false
    }

    return {
        homeIcon,
        settingsIcon,
        alertIcon,
        setStateTrueForHome,
        setStateTrueForSettings
    }

})

export const counter = defineStore('counter', () => {
    let number = ref(0)
    const increment = () => {
        number.value += 1
    }

    return {
        number, increment
    }
})