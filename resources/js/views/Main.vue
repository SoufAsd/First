<template lang="">
    <div>
        <div>
            <main>
                <div class="container-fluid">
                    <div class="px-4 md:px-10 mx-auto w-full">
                        <div>
                            <div class="flex flex-wrap">
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div
                                                    class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        class="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                        Signup
                                                    </h5>
                                                    <span
                                                        class="font-semibold text-xl text-blueGray-700"
                                                        >{{users.length}}</span
                                                    >
                                                </div>
                                                <div
                                                    class="relative w-auto pl-4 flex-initial"
                                                >
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                                                    >
                                                        <i
                                                            class="fas fa-users"
                                                        ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div
                                                    class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        class="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                        Users
                                                    </h5>
                                                    <span
                                                        class="font-semibold text-xl text-blueGray-700"
                                                        >{{userole1.length}}</span
                                                    >
                                                </div>
                                                <div
                                                    class="relative w-auto pl-4 flex-initial"
                                                >
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                                                    >
                                                        <i
                                                            class="fas fa-users"
                                                        ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div class="flex-auto p-4">
                                            <div class="flex flex-wrap">
                                                <div
                                                    class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        class="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                    Admin
                                                    </h5>
                                                    <span
                                                        class="font-semibold text-xl text-blueGray-700"
                                                        >{{userole2.length}}</span
                                                    >
                                                </div>
                                                <div
                                                    class="relative w-auto pl-4 flex-initial"
                                                >
                                                    <div
                                                        class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                                                    >
                                                        <i
                                                            class="fas fa-users"
                                                        ></i>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap mt-4">
                        <div class="w-full mb-12 px-4">
                            <div
                                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
                            >
                                <div class="rounded-t mb-0 px-4 py-3 border-0">
                                    <div class="flex flex-wrap items-center">
                                        <div
                                            class="relative w-full px-4 max-w-full flex-grow flex-1"
                                        >
                                            <h3
                                                class="font-semibold text-lg text-blueGray-700"
                                            >
                                                Users Tables
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="block w-full overflow-x-auto">
                                    <table
                                        class="items-center w-full bg-transparent border-collapse"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                >
                                                    User
                                                </th>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                >
                                                    Age
                                                </th>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                >
                                                    Adresse
                                                </th>
                                                <th
                                                    class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                ></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="user in users"
                                                :key="user.id"
                                            >
                                                <th
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                                                >
                                                    <img
                                                        :src="user.path"
                                                        class="h-12 w-12 bg-white rounded-full border"
                                                        alt="..."
                                                    /><span
                                                        class="ml-3 font-bold text-blueGray-600"
                                                    >
                                                        {{ user.name }}
                                                    </span>
                                                </th>
                                                <td
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                >
                                                    <div
                                                        v-if="
                                                            user.first &&
                                                                user.last
                                                        "
                                                    >
                                                        {{ user.first }}{{ " "
                                                        }}{{ user.last }}
                                                    </div>
                                                    <div v-else>
                                                        Not Yet Added
                                                    </div>
                                                </td>

                                                <td
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                >
                                                    <i
                                                        class="fas fa-circle text-orange-500 mr-2"
                                                    ></i>
                                                    {{ user.email }}
                                                </td>
                                                <td
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                >
                                                    <div v-if="user.age">
                                                        {{ user.age }}
                                                    </div>
                                                    <div v-else>
                                                        Not Yet Added
                                                    </div>
                                                </td>
                                                <td
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                >
                                                    <div v-if="user.adresse">
                                                        {{ user.adresse }}
                                                    </div>
                                                    <div v-else>
                                                        Not Yet Added
                                                    </div>
                                                </td>
                                                <td
                                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                                                >
                                                    <select
                                                        v-model="user.role"
                                                        @change="
                                                            handleChanger(
                                                                $event,
                                                                user.id
                                                            )
                                                        "
                                                        class="form-control"
                                                        v-if="user.role === 2"
                                                    >
                                                        <option
                                                            value="2"
                                                            selected
                                                            >Admin</option
                                                        >
                                                        <option value="1"
                                                            >User</option
                                                        >
                                                    </select>
                                                    <select
                                                        v-model="user.role"
                                                        @change="
                                                            handleChanger(
                                                                $event,
                                                                user.id
                                                            )
                                                        "
                                                        class="form-control"
                                                        v-else="user.role === 1"
                                                    >
                                                        <option value="2"
                                                            >Admin</option
                                                        >
                                                        <option
                                                            value="1"
                                                            selected
                                                            >User</option
                                                        >
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-4"></div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
import Form from "vform";
import axios from "axios";
export default {
    data() {
        const permission = localStorage.permission;
        return {
            userole1: [],
            userole2: [],
            permission: permission,
            users: [],
            userx: new Form({
                id: "",
                name: "",
                email: "",
                path: "",
                role: "",
                first: "",
                last: "",
                adresse: "",
                age: ""
            })
        };
    },
    methods: {
        async getUsers() {
            const { data } = await axios.get("api/getusers");
            this.users = data;
        },
        async getuserole1() {
            const { data } = await axios.get("api/getuserole1");
            this.userole1 = data;
        },
        getuserole2() {
                axios.get("api/getuserole2").then(({ data }) => this.userole2=data);
        },
        getUser() {
            axios
                .get("api/profile")
                .then(({ data }) => (localStorage["role"] = data.role));
        },
        handleChanger(event, id) {
            localStorage.setItem("permission", event.target.value);
            axios.post('/api/changerole',{rolechg : localStorage["permission"],iduser : id});
            global.location.reload();
        }
    },
    created() {
        this.getUsers();
        this.getUser();
    },
    mounted() {
        this.getuserole1();
        this.getuserole2();
    },
};
</script>
<style lang=""></style>
