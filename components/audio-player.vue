<template>
    <div>
            <div class="audio-message-content">
            <a v-if="loaded" class="play-pause-btn" href="#" :title="playing ? 'Clique aqui para pausar o audio' : 'Clique aqui ouvir o audio'" @click.prevent="togglePlay">
            <svg key="pause" v-if="playing" x="0px" y="0px" viewBox="0 0 18 20" style="width: 18px; height: 20px; margin-top: -10px">
            <path d="M17.1,20c0.49,0,0.9-0.43,0.9-0.96V0.96C18,0.43,17.6,0,17.1,0h-5.39c-0.49,0-0.9,0.43-0.9,0.96v18.07c0,0.53,0.4,0.96,0.9,0.96H17.1z M17.1,20"/>
            <path d="M6.29,20c0.49,0,0.9-0.43,0.9-0.96V0.96C7.19,0.43,6.78,0,6.29,0H0.9C0.4,0,0,0.43,0,0.96v18.07C0,19.57,0.4,20,0.9,20H6.29z M6.29,20"/>
            </svg>
            <svg key="play" v-else x="0px" y="0px" viewBox="0 0 18 22" style="width: 18px; height: 22px; margin-top: -11px">
            <path d="M17.45,10.01L1.61,0.14c-0.65-0.4-1.46,0.11-1.46,0.91V20.8c0,0.81,0.81,1.32,1.46,0.91l15.84-9.87C18.1,11.43,18.1,10.41,17.45,10.01L17.45,10.01z M17.45,10.01"/>
            </svg>
            </a>
            <div v-else class="loading">
            <div class="spinner"></div>
            </div>

            <div class="controls">
            <span class="current-time">{{ currentTime }}</span>
            <div class="slider" data-direction="horizontal" @click="updateSlider($event)">
            <div class="progress" :style="{width: percent}">
            <div class="pin" id="progress-pin" data-method="rewind"></div>
            </div>
            </div>
            <span class="total-time">{{ totalTime }}</span>
            </div>

            <audio ref="player" :src="src" @timeupdate="updateProgress" @loadedmetadata="loadedMeta" @canplay="canPlay" @ended="ended"></audio>
            </div>
    </div>
</template>


<style scoped>

.audio-message-content {
  width: 400px;
  min-width: 300px;
  height: 56px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 4px;
  user-select: none;
  -webkit-user-select: none;
  background-color: #fff;
}
.audio-message-content .play-pause-btn {
  position: relative;
  width: 18px;
  height: 22px;
  cursor: pointer;
}
.audio-message-content .play-pause-btn svg {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -9px;
}
.audio-message-content .spinner {
  width: 18px;
  height: 18px;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/loading.png);
  background-size: cover;
  background-repeat: no-repeat;
  animation: spin 0.4s linear infinite;
}
.audio-message-content .slider {
  flex-grow: 1;
  background-color: #D8D8D8;
  cursor: pointer;
  position: relative;
}
.audio-message-content .slider .progress {
  background-color: #44BFA3;
  border-radius: inherit;
  position: absolute;
  pointer-events: none;
}
.audio-message-content .slider .progress .pin {
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: #44BFA3;
  position: absolute;
  pointer-events: all;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32);
}
.audio-message-content .controls {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: #55606E;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin-left: 24px;
}
.audio-message-content .controls .slider {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 2px;
  height: 4px;
}
.audio-message-content .controls .slider .progress {
  width: 0;
  height: 100%;
}
.audio-message-content .controls .slider .progress .pin {
  right: -8px;
  top: -6px;
}
.audio-message-content .controls span {
  cursor: default;
}

svg, img {
  display: block;
}

@keyframes spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(1turn);
  }
}

</style>

<script>
export default {
  props:['src'],
  data: () => ({
    loaded: false,
    playing: false,
    player: null,
    percent: '0%',
    currentTime: '00:00',
    totalTime: '00:00',
    draggableClasses: ['pin'],
    currentlyDragged: null
  }),
  methods: {
    formatTime(time) {
      var min = Math.floor(time / 60)
      var sec = Math.floor(time % 60)
      return min + ':' + ((sec<10) ? ('0' + sec) : sec)
    },
    isDraggable(el) {
      let canDrag = false;
      let classes = Array.from(el.classList);
      this.draggableClasses.forEach(draggable => {
        if(classes.indexOf(draggable) !== -1)
          canDrag = true;
      })
      return canDrag;
    },
    loadedMeta() {
      this.totalTime = this.formatTime(this.player.duration)
    },
    canPlay() {
      this.loaded = true
    },
    togglePlay() {
      if(this.player.paused) {
        this.playing = true
        this.player.play()
      } else {
        this.playing = false
        this.player.pause()
      }
    },
    updateProgress() {
      var current = this.player.currentTime
      var percent = (current / this.player.duration) * 100
      this.percent = `${percent}%`

      this.currentTime = this.formatTime(current)
    },
    updateSlider(event) {
      var pin = event.target.querySelector('.pin');
      this[pin.dataset.method]
    },
    rewind(event) {
      if(this.inRange(event)) {
        this.player.currentTime = this.player.duration * this.getCoefficient(event);
      }
    },
    inRange(event) {
      let rangeBox = this.getRangeBox(event)
      var min = rangeBox.offsetLeft
      var max = min + rangeBox.offsetWidth
      if(event.clientX < min || event.clientX > max){
        return false
      } else{
        return true
      }
    },
    getRangeBox(event) {
      let rangeBox = event.target;
      let el = this.currentlyDragged;
      if(event.type == 'click' && this.isDraggable(event.target)) {
        rangeBox = event.target.parentElement.parentElement;
      }
      if(event.type == 'mousemove') {
        rangeBox = el.parentElement.parentElement;
      }
      return rangeBox;
    },
    getCoefficient(event) {
      let slider = this.getRangeBox(event);
      let K = 0;

      let offsetX = event.clientX - slider.offsetLeft;
      let width = slider.clientWidth;
      K = offsetX / width;

      return K;
    },
    ended() {
      this.playing = false
      this.player.currentTime = 0
    }
  },
  mounted() {
    this.player = this.$refs.player

    let component = this

    window.addEventListener('mousedown', function(event) {

      if(!component.isDraggable(event.target)) return false;

      component.currentlyDragged = event.target;
      let handleMethod = component.currentlyDragged.dataset.method;

      window.addEventListener('mousemove', component[handleMethod], false);

      window.addEventListener('mouseup', () => {
        component.currentlyDragged = false;
        window.removeEventListener('mousemove', component[handleMethod], false);
      }, false);
    });
  }
}
</script>
