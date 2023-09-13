import { useNavigate } from "react-router-dom";
import axiosClient from "ui/config/axiosConfig";
import {
  PasswordInput,
  Group,
  Button,
  Box,
  useForm,
  Container,
  TextInput,
} from "ui/mantine";
import useUserStore from "../zustand";

function Login() {
  const navigate = useNavigate();

  const { handleLogin } = useUserStore();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      //   confirmPassword: (value, values) =>
      //     value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = async () => {
    const data = {
      password: form.values.password,
      identifier: form.values.username,
    };
    try {
      const res = await axiosClient.post("/auth/local", data);
      // Cookies.set("token", res.data.jwt, {
      //   expires: 24 * 60 * 60 * 1000,
      //   sameSite: "strict",
      //   secure: true,
      // });
      handleLogin(res.data);

      navigate("/dashboard");
    } catch (error: any) {
      // setError(error.response.data.error.message);
    }
  };

  return (
    <Container
      h={"100vh"}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        w={340}
        mx="auto"
        sx={{ background: "#ededed", padding: "1rem", borderRadius: "5px" }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Username"
            placeholder="Username"
            {...form.getInputProps("username")}
            size="lg"
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
            my={20}
            size="lg"
          />

          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Container>
  );
}
export default Login;
