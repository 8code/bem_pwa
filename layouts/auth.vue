<template>
    <div :class="$store.state.mode">
         <nuxt  />
    </div>
</template>


<style>
    .dark-mode{
         --primary: #00171F;
         --primary-0: #000d11;
         --primary-1: #043141;
         --secondary: #FAFAFA;
         --secondary-1: #ccc;
         --active: #dbba00;
          background-color: var(--primary);
          color:  var(--secondary);
          min-height: 100vh;
    }
    .light-mode{
          --primary: #FAFAFA;
          --primary-0: #FFF;
          --primary-1: #ebe9e9;
          --secondary: #00171F;
          --secondary-1: #043141;
          --active: #dbba00;
          background-color: var(--primary);
          color:  var(--secondary);
          min-height: 100vh;
    }
    .bg-primary{
         background-color: var(--primary);
         color: var(--secondary);
    }

</style>
