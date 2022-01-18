import { Add, Remove } from "@mui/icons-material";
import { Box, Button, ButtonBase, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlexBox from "components/FlexBox";
import { H3, Small } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import { useState } from "react"; // styled components
import { calcPrice } from "./priceCalculations";

const StyledButton = styled(ButtonBase)(({ theme }) => ({
  width: 35, height: 35, borderRadius: "8px", backgroundColor: theme.palette.mode === "light" ? theme.palette.secondary[200] : theme.palette.divider
}));

const StyledCard = styled(Card)(() => ({ display: "flex", flexWrap: "wrap", alignItems: "center", padding: "1rem 2rem", marginBottom: "1.5rem", justifyContent: "space-between" }));

const ButtonWrapper = styled(Box)(({ theme }) => ({ [theme.breakpoints.down(868)]: { marginTop: 16 } }));

const CartListItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  function handleSumArticleQuantity() {
    console.log("sum", item)
  }

  const image = item.AnimalProduct ? item.AnimalProduct.Product.image : item.EggsBatchProduct.Product.image;

  return <StyledCard>
    <FlexBox alignItems="center">
      <UkoAvatar src={image} sx={{ width: 70, height: 70, borderRadius: "10%" }} />

      <Box marginLeft={2}>
        <H3>{item.AnimalProduct ? item.AnimalProduct.Product.name : item.EggsBatchProduct.Product.name}</H3>
        <H3>{calcPrice(item)}€</H3>
        <Small color="text.disabled">
          {item.stock !== 0 ? "In Stock" : "Out of Stock"}
        </Small>
      </Box>
    </FlexBox>

    <ButtonWrapper>
      {quantity > 0 ? <FlexBox alignItems="center">
        <StyledButton onClick={handleSumArticleQuantity}>
          <Add color="disabled" />
        </StyledButton>

        <H3 width={40} textAlign="center">
          {quantity}
        </H3>

        <StyledButton onClick={() => setQuantity(state => state > 0 ? state - 1 : state
        )}>
          <Remove color="disabled" />
        </StyledButton>
      </FlexBox> : <Button variant="contained" onClick={() => setQuantity(quantity + 1)}>
        Add To Cart
      </Button>}
    </ButtonWrapper>
  </StyledCard>;
};

export default CartListItem;