<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-light slide container"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img
          src="https://i.pinimg.com/originals/cb/43/c4/cb43c4b49495c1489d1207e366f4a71e.jpg"
          class="d-block w-100 h-100 cover"
          alt="..."
        />
        <div class="carousel-caption  d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://wallpaperbat.com/img/579001-guitar-amp-wallpaper.jpg"
          class="d-block w-100 h-100 .cover"
          alt="..."
        />
        <div class="carousel-caption  d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRzZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          class=" d-block w-100 h-100 cover "
          alt="..."
        />
        <div class="carousel-caption  d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <i class="bi bi-arrow-left" aria-hidden="true"></i>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <i class="bi bi-arrow-right" aria-hidden="true"></i>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'Slide',
};
</script>
<style scoped>
.carousel {
  margin-bottom: 4rem;

}
h5{
  text-shadow: 2px 2px 4px #000000;
}
p{
  text-shadow: 2px 2px 4px #000000;
}
.carousel-item {
  height: 32rem;
}
.cover {
  object-fit: cover;
 
}


/* .slide {
  margin-top: 77px;
}
.carousel-inner img{
  height: 200px;
  object-fit: cover;
} */

/* @media (max-width: 678px) {
  .slide {
    margin-top: 100px;
  }
} */
</style>
