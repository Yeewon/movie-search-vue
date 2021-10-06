<template>
  <div class="skeleton">
    <div class="skeleton-movie-poster"></div>
    <div class="content-container pt-2">
      <div>
        <div class="meta line">
          <div class="skeleton-movie-title"></div>
          <div class="skeleton-movie-rate"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin video-skeleton {
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #ededed 30px,
    #e0e0e0 60px
  );
  animation: refresh 2s infinite ease-out;
}

.skeleton {
    width: 230px;
    height: 450px;
    margin: 0 0 0 60px;
    .skeleton-movie-poster {
        @include video-skeleton();
        width: 230px;
        height: 331px;
        margin-bottom: 5px;
    }
    .line {
    :first-child {
        @include video-skeleton();
        height: 30px;
        width: 100%;
        padding: 2px 0 0 1px;
        margin-bottom: 5px;
    }

    :last-child {
        @include video-skeleton();
        height: 20px;
        width: 30%;
    }
    }
}
</style>