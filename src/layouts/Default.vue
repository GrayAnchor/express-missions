<template>
  <div class="w-full">
    <header class="header bg-green-100 w-full px-4">
      <nav class="block w-full h-32 flex items-center mx-auto max-w-large">
          <a class="block h-12" href="/"><img class="h-full block object-contain" src="/images/logo.png"></a>
      </nav>
    </header>
    <slot/>
    <footer class="w-full bg-blue-100 h-32">
      This is the footer
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}



.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
