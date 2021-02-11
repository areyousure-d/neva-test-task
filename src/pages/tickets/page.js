import React from "react";

import {
  Heading,
  Text,
  Box,
  Table,
  Divider,
  UnorderedList,
  ListItem,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const TicketsPage = () => {
  return (
    <Box p={4}>
      <Heading>Билеты на событие</Heading>
      <Heading size="md">Всего будет 4 таблицы.</Heading>
      <UnorderedList>
        <ListItem>purchase_order</ListItem>
        <ListItem>purchase_order_item</ListItem>
        <ListItem>ticket_type</ListItem>
        <ListItem>ticket_price</ListItem>
      </UnorderedList>
      <Divider />

      <Heading size="md">purchase_order</Heading>
      <Text>
        В purchase_order будут храниться заказы. Удалил столбец с общей
        стоимостью потому что ее можно рассчитать на основе других данных,
        хранить ее не обязательно. Удалил столбцы со стоимостью, типом,
        штрих-кодом потому что они будут храниться в другой таблице. Так как в
        одном заказе может быть несколько билетов, билеты заказа будут храниться
        в другой таблице purchase_order_item, у каждой записи будет id заказа -
        purchase_order_id.
      </Text>
      <Table>
        <TableCaption>purchase_order</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>user_id</Th>
            <Th>created</Th>
            <Th>event_date</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>00451</Td>
            <Td>2021-02-03 00:00:00</Td>
            <Td>2021-02-21 00:00:00</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>00364</Td>
            <Td>2021-02-11 21:00:00</Td>
            <Td>2021-02-20 15:00:00</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>00015</Td>
            <Td>2021-02-11 00:00:00</Td>
            <Td>2021-08-21 00:00:00</Td>
          </Tr>
        </Tbody>
      </Table>

      <Divider />

      <Heading size="md">purchase_order_item</Heading>
      <Text>
        В purchase_order_item будут храниться позиции заказов. Одна запись -
        один билет, тут же будут хранитсья штрих-коды.
      </Text>
      <Table>
        <TableCaption>purchase_order_item</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>purchase_order_id</Th>
            <Th>ticket_price_id</Th>
            <Th>barcode</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>1</Td>
            <Td>1</Td>
            <Td>11111111</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>2</Td>
            <Td>6</Td>
            <Td>11111112</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>2</Td>
            <Td>6</Td>
            <Td>11111113</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>3</Td>
            <Td>2</Td>
            <Td>11111114</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>3</Td>
            <Td>2</Td>
            <Td>11111115</Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>3</Td>
            <Td>2</Td>
            <Td>11111116</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>3</Td>
            <Td>1</Td>
            <Td>11111117</Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>3</Td>
            <Td>3</Td>
            <Td>11111118</Td>
          </Tr>
        </Tbody>
      </Table>
      <Divider />
      <Heading size="md">ticket_type</Heading>
      <Text>Тип билета (взрослый, детский, льготный, групповой и тд)</Text>
      <Table>
        <TableCaption>ticket_type</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>type</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>adult</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>kid</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>discount</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>group</Td>
          </Tr>
        </Tbody>
      </Table>
      <Divider />
      <Heading size="md">ticket_price</Heading>
      <Text>
        Так как у каждого события могут быть разные цены для каждого типа
        билета, все цены будут храниться в отдельной таблице.
      </Text>
      <Table>
        <TableCaption>ticket_price</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>event_id</Th>
            <Th>ticket_type_id</Th>
            <Th>price</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>003</Td>
            <Td>1</Td>
            <Td>700</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>003</Td>
            <Td>2</Td>
            <Td>450</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>003</Td>
            <Td>3</Td>
            <Td>200</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>003</Td>
            <Td>4</Td>
            <Td>500</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>006</Td>
            <Td>1</Td>
            <Td>1000</Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>006</Td>
            <Td>2</Td>
            <Td>800</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>006</Td>
            <Td>3</Td>
            <Td>700</Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>006</Td>
            <Td>4</Td>
            <Td>700</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
