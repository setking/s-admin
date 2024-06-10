<template>
  <el-form
    :model="formData"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    @keypress.enter="submitForm(ruleForm)"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="formData.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="rePassword">
      <el-input
        type="password"
        v-model="formData.rePassword"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm)">提交</el-button>
      <el-button @click="resetForm(ruleForm)">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElMessage,
  FormInstance,
  FormRules,
} from "element-plus";
import { useUserStoreWithOut } from "~store/modules/user";
const userStore = useUserStoreWithOut();
const ruleForm = ref<FormInstance>();
const formData = ref({
  username: "111",
  password: "111",
  rePassword: "111",
});
// const validatePass = (rule, value, callback) => {};
const validateRePass = (rule: any, value: string, callback: any) => {
  if (value !== formData.value.password) {
    callback("两次输入的密码不一致");
  } else {
    callback();
  }
};
const rules = reactive<FormRules<typeof formData>>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    // { validator: validatePass, trigger: "blur" },
  ],
  rePassword: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { validator: validateRePass, trigger: "blur" },
  ],
});

const submitForm = (ruleForm: FormInstance | undefined) => {
  if (!ruleForm) return;
  ruleForm.validate(async (valid: any) => {
    if (valid) {
      ElMessage.success("登录成功");
      userStore.login(formData.value);
    } else {
      ElMessage.error("登录失败");
    }
  });
};
const resetForm = (ruleForm: FormInstance | undefined) => {
  ruleForm?.resetFields();
};
</script>
<style lang="scss" scoped></style>
