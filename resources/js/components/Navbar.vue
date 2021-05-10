<template lang="">
    <div>
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <a class="navbar-brand" href="/home">Laravel Project</a>

            <!-- Navbar Search-->
            <form
                class=""
            >
                <div class="input-group">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ml-auto ml-md-0">
                <li class="nav-item dropdown">
                    <a
                        class="nav-link"
                        id="userDropdown"
                        href="#!"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        @click.prevent="logout"
                        ><i class="fas fa-sign-out-alt"></i
                    ></a>
                </li>
            </ul>
        </div>
        </nav>
        
    </div>
</template>
<script>
export default {
    methods: {
        logout() {
            axios.post("logout").then(() => {
                this.$router.go();
            });
        }
    }
};
</script>
<style lang=""></style>
