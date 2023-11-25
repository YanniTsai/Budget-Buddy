<template>
    <div class="sidebar d-flex flex-column justify-content-end align-items-center p-2">
        <router-link to="/dashboard/account" class="d-flex flex-column align-items-center mb-2">
            <i class="bi bi-person-fill"></i>
            <div>帳戶管理</div>
        </router-link>
        <router-link to="/dashboard/setting" class="d-flex flex-column align-items-center mb-2">
            <i class="bi bi-wrench"></i>
            <div>系統設定</div>
        </router-link>
    </div>
</template>
