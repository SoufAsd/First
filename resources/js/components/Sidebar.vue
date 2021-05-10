<template lang="">
    <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <router-link to="/home" class="nav-link" exact>
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                               Dashboard</router-link>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Profile
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <router-link to="/details" class="nav-link" exact>Details</router-link>
                                    <router-link to="/setting" class="nav-link" exact>Setting</router-link>
                                </nav>
                            </div>
                            <router-link to="/manager" class="nav-link" exact>
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                               Manager</router-link>
                        </div>
                    </div>
                </nav>
            </div>
    </div>
</template>
<script>
import Main from "../views/Main.vue";
import Profile from "../views/Profile.vue";
export default {
    component: {
        Main,
        Profile
    }
};
</script>
<style lang=""></style>
