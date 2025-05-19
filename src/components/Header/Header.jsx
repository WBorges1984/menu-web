import { Avatar, Box, Stack } from "@mui/material";

export const Header = () => {
  return (
    <Box>
      <img
        src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/stores/background/1729033197670ef3ed3ae20.png"
        alt="Banner"
      />
      <Stack sx={{position:"absolute", top: 125, left: 20}}direction="row" spacing={2}>
      <Avatar sx={{width: 100, height: 100}} alt="Remy Sharp" src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/stores/logo/170593820365ae8d1bd11dc_medium.png" />
    </Stack>
    </Box>
  );
};
