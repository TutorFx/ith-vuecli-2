<template>
  <li class="mb-2">
    <span class="text-primary h5 mr-2"
      ><span class="uim-svg" style=""
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
        >
          <path
            class="uim-primary"
            d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z"
            opacity=".99"
          ></path>
          <path
            class="uim-tertiary"
            d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z"
          ></path></svg></span></span
    ><slot />
  </li>
</template>

<script>
export default {};
</script>

<style scoped>
  .uim-svg {
    display: inline-block;
    height: 1em;
    vertical-align: -0.125em;
    font-size: inherit;
    fill: #FCA311;
  }

  .uim-svg svg {
    display: inline-block;
  }

  .uim-primary {
    opacity: 1;
  }

  .uim-tertiary {
    opacity: 0.5;
  }
</style>
