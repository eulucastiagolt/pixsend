import * as React from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import CurrencyInput from "react-native-currency-input";

const NewItem = () => {

  const [text, setText] = React.useState(0);

  const priceinput = () => {
    return <Text>R$</Text>;
  };

  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
      <Text>Modal</Text>
      <TextInput mode="outlined" label="Nome do cliente" />
      <TextInput mode="outlined" label="Titulo produto/serviço" />
      <TextInput
        mode="outlined"
        label="Valor"
        render={(props) => <CurrencyInput {...props} value={text} precision={2} minValue={0} prefix="R$" onChangeValue={(val) => setText(val ? val : 0)} />}
      />
      <Button style={{ marginTop: 20 }} mode="contained-tonal">Salvar</Button>
    </View>
  );
};

export default NewItem;
