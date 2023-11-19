<template>
    <div class="h-100vh d-flex justify-content-center align-items-center">
        <div class="login-section p-5 d-flex flex-column justify-content-around align-items-center">
            <!-- logo -->
            <div class="d-flex flex-column align-items-center">
                <font-awesome-icon icon="fa-solid fa-user-group" class="login-logo"/>
                <h1>Budget Buddy</h1>
            </div>
            <!-- input -->
            <div class="input-section w-100 d-flex flex-column justify-content-around align-items-center">
                <div class="fs-4">忘記密碼</div>
                <div class="w-100">
                    <label for="answer" class="form-label">請輸入email</label>
                    <input type="email" id="answer" class="form-control">
                </div>
            </div>
            <!-- button -->
            <div class="w-100 text-end">
                <button class="btn blue-btn">送出</button>
            </div>
        </div>
    </div>
</template>
