import {
  ActionIcon,
  Container,
  Group,
  Header,
  Input,
  createStyles,
  rem,
} from "ui/mantine";
import {
  IconBell,
  IconBrandMessenger,
  IconSearch,
  IconSettings,
} from "ui/tabler";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },
  input: {
    width: "60%",
  },
  icons: {
    flexGrow: 1,
  },
}));

const Headers = () => {
  const { classes } = useStyles();

  return (
    <Header
      height={60}
      mb={40}
      mt={20}
      sx={{ borderBottom: 0, background: "transparent" }}
    >
      <Container className={classes.inner} fluid>
        <Input icon={<IconSearch />} className={classes.input} size="lg" />

        <Group className={classes.icons} position="right">
          <ActionIcon variant="light" size={"xl"} color="blue" radius={"lg"}>
            <IconBell />
          </ActionIcon>
          <ActionIcon variant="light" size={"xl"} color="blue" radius={"lg"}>
            <IconBrandMessenger />
          </ActionIcon>
          <ActionIcon variant="light" size={"xl"} color="red" radius={"lg"}>
            <IconSettings />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};

export default Headers;
