<template lang="">
    <div>
        <Sidebarv2 />
        <Navebarv2/>
        <div class="relative md:ml-64 bg-blueGray-100">
            <nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"></nav>
                <div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
    </div>
</nav>
<div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>
            <router-view ></router-view>
        </div>
    </div>
</div>
        
        
        </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Main from "./views/Main.vue";
export default {
    component: {
        Navbar,
        Sidebar,
        Main
    }
};
</script>
<style lang="">
    
</style>
