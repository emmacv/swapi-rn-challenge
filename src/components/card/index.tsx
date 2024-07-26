import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { People } from '../../types/people'
import styled from 'styled-components/native';


type Props = {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderStyle: 'solid',
    borderColor: '#555555',
    borderWidth: 2,
    backgroundColor: '#73737997'
  }
});
