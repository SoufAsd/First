<template lang="">
    <div>
        <div class="relative md:ml-64 bg-blueGray-100">
            <nav
                class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
            >
                <div
                    class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
                >
                    <select
                    style='font-family:Arial, FontAwesome;'
                    class="border-0 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none" 
                    v-model="language" @change="handleChanger($event)">
                        <option value="en" >🇬🇧&emsp;English</option>
                        <option value="fr">🇫🇷&emsp;Français</option>
                        <option value="ar">🇦🇪&emsp;عربي</option>
                    </select>
                    <form
                        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
                    >
                        <div
                            class="relative flex w-full flex-wrap items-stretch"
                        >
                            <span
                                class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                            >
                                <i class="fas fa-search"></i>
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                class="border-0 px-5 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                            />
                        </div>
                    </form>
                    <ul
                        class="flex-col md:flex-row list-none items-center hidden md:flex"
                    >
                        <div>
                            <a class="text-blueGray-500 block" href="">
                                <div class="items-center flex">
                                    <a
                                        class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                                        @click.prevent="logout"
                                    >
                                        <i class="fas fa-sign-out-alt"></i>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        const language = localStorage.language || "en";
        return {
            language: language
        };
    },
    methods: {
        handleChanger(event) {
            localStorage.setItem("language", event.target.value);
            global.location.reload();
        },
        logout() {
            axios.post("logout").then(() => {
                this.$router.go();
            });
        }
    },
    created() {
        
    }
};
</script>
<style lang=""></style>
