import * as React from "react";
import { Text, Card, FAB, IconButton } from "react-native-paper";
import { Alert, StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ltcodetheme from "../../../configs/theme";
import { useNavigation } from "@react-navigation/native";
import { RouterTypes } from "../../routers";

type Items = {
  id: number;
  title: string;
  client: string;
  price: number;
};

type Data = {
  [key: number]: Items;
};

const data = [
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
  {
    id: 1,
    title: "Cobrança para x blas",
    client: "Lucas Tiago",
    price: 10.0,
  },
];

const ItemRender = ({ item }: { item: Items }) => {
  return (
    <Card
      mode="outlined"
      onPress={() => {
        Alert.alert("Mensagem", "Logo teremos informações completa");
      }}
    >
      <Card.Title title={item.title} right={(props) => <IconButton {...props} icon="pencil" onPress={() => {}} />} />
      <Card.Content>
        <Text variant="titleSmall">Cliente: {item.client}</Text>
        <Text variant="titleSmall">Valor: {Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)}</Text>
      </Card.Content>
    </Card>
  );
};

const Home = () => {

  const navigation = useNavigation<RouterTypes>();

  return (
    <>
      <FlashList
        data={data}
        renderItem={ItemRender}
        estimatedItemSize={44}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        ListFooterComponentStyle={{ paddingBottom: 70 }}
      />
      <FAB icon="plus" style={styles.fab} mode="elevated" theme={ltcodetheme} onPress={() => navigation.navigate("NewItem")} />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
