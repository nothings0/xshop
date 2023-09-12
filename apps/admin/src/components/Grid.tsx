import { Box, Container, Grid, Group, Text, createStyles } from "ui/mantine";
import { IconClipboardList } from "ui/tabler";

const data = [
  {
    icon: <IconClipboardList fontSize="20px" />,
    text: "Total orders",
    total: 75,
  },
  {
    icon: <IconClipboardList fontSize="20px" />,
    text: "Total delivered",
    total: 375,
  },
  {
    icon: <IconClipboardList fontSize="20px" />,
    text: "Total canceled",
    total: 100,
  },
];

const useStyles = createStyles(() => ({
  grid: {
    padding: "0 1rem",
  },
  col: {
    padding: "2rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "1px 1px 2px 1px #ccc",
  },
  total: {
    fontSize: "35px",
    fontWeight: 800,
  },
  text: {
    fontSize: "16px",
  },
}));

const GridContainer = () => {
  const { classes } = useStyles();

  return (
    <Box>
      <Text p={"1rem"} sx={{ fontSize: "30px", fontWeight: 600 }}>
        Dashboard
      </Text>
      <Grid gutter={5} justify="space-between" className={classes.grid}>
        {data.map((item, index) => (
          <Grid.Col span={3} key={index} className={classes.col}>
            <Group>
              <Container>{item.icon}</Container>
              <Container>
                <Text className={classes.total}>{item.total}</Text>
                <Text className={classes.text}>{item.text}</Text>
              </Container>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default GridContainer;
