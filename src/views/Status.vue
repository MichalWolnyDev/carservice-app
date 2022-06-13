<template>
  <div>
    <div class="status">
      <h2 class="title title__h2 text__center">Status naprawy</h2>
      <div class="status__container">
        <div class="status__message">
            <p class="status__message-text text__center">
                Brak informacji o zarezerwowanej wizycie
            </p>
        </div>
        <div class="steps">
          <div class="steps__item active">
            <div class="steps__item-row">
              <div class="steps__number active">
                <p class="steps__number-text">1</p>
              </div>
              <div class="steps__message">
                <p class="steps__message-text active">
                  Rezerwacja oczekuje na przyjęcie przez warsztat
                </p>
              </div>
            </div>
          </div>
          <div class="steps__item">
            <div class="steps__item-row">
              <div class="steps__number">
                <p class="steps__number-text">2</p>
              </div>
              <div class="steps__message">
                <p class="steps__message-text">
                  Samochód przyjęty do warsztatu
                </p>
              </div>
            </div>
          </div>
          <div class="steps__item">
            <div class="steps__item-row">
              <div class="steps__number">
                <p class="steps__number-text">3</p>
              </div>
              <div class="steps__message">
                <p class="steps__message-text">
                  Trwa naprawa Twojego samochodu
                </p>
              </div>
            </div>
          </div>
          <div class="steps__item">
            <div class="steps__item-row">
              <div class="steps__number">
                <p class="steps__number-text">4</p>
              </div>
              <div class="steps__message">
                <p class="steps__message-text">Auto czeka na odbiór</p>
              </div>
            </div>
          </div>
          <div class="steps__item">
            <div class="steps__item-row">
              <div class="steps__number">
                <p class="steps__number-text">5</p>
              </div>
              <div class="steps__message">
                <p class="steps__message-text">Auto odebrane przez klienta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.status{
    &__message{
        margin: 30px 0;

        &-text{
            font-size: 20px;
        }
    }
}
.steps {
  margin: 50px 0;

  &__item {
    position: relative;
    padding-bottom: 40px;

    &-row {
      display: flex;
      align-items: center;
    }

    &::after {
      content: "";
      background-color: $gray;
      width: 2px;
      height: 40px;
      position: absolute;
      left: 23px;
      z-index: -1;
      top: 50px;
    }

    &.active {
      &::after {
        background-color: $green;
      }
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }


    @media(max-width: 320px){
        padding-bottom: 20px;
    }
  }

  &__number {
    width: 50px;
    height: 50px;
    background-color: $gray;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-right: 20px;

    &.active {
      background-color: $green;
      box-shadow: 0 0 0 0 rgba(49, 209, 44, 1);
      transform: scale(1.2);
      animation: pulse 2s infinite;
    }

    &-text {
      font-size: 24px;
    }
  }

  &__message {
    flex: 2;
    &-text {
      font-weight: 700;
      color: $gray;

      &.active {
        color: $green;
      }
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(49, 209, 44, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(49, 209, 44, 0);
  }
}
</style>
