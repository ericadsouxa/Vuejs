<script setup>
export default {
  name: 'displaydate'
};
import { useFormatDate } from '../composables/useFormatDate';

//import useformatedate from '../composables/useformatedate'
const date = new Date();

let dateMMDDYYYY = (date) => {
    useformatedate(date, 'MM/dd/yyyy');
}


let {formatedate} = useformatedate(date);

</script>

<template>
    <h1> Today :{{ date }}</h1>
    <hr>
    Date (MM-DD-YYYY) : {{ dateMMDDYYYY}}
</template>