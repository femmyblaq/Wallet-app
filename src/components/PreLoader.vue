<template>
  <div id="preloader" class="position-fixed">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="loader loader-line d-inline-flex position-absolute">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
        <div class="line line5"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;

  .loader-line {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    vertical-align: middle;
    .line {
      width: 8px;
      position: absolute;
      border-radius: 5px;
      bottom: 0;
      background: -webkit-gradient(
        linear,
        letf bottom,
        left top,
        from(#258df7),
        to(#fb2eb6)
      );
      background: linear-gradient(to bottom, #e23703, #b66502);
    }

    .line1 {
      left: 0;
      -webkit-animation: line1-grow 1s ease alternate-reverse infinite;
      animation: line1-grow 1s ease alternate-reverse infinite;
      @keyframes line1-grow {
        0% {
          height: 20%;
        }
        100% {
          height: 100%;
        }
      }

      @keyframes line1-grow {
        0% {
          height: 100%;
        }
        100% {
          height: 20%;
        }
      }
    }
    .line2 {
      left: 20px;
      -webkit-animation: line2-grow 1s 0.25s ease alternate-reverse infinite;
      animation: line2-grow 1s 0.25s ease alternate-reverse infinite;
      @keyframes line2-grow {
        0% {
          height: 20%;
        }
        100% {
          height: 80%;
        }
      }

      @keyframes line2-grow {
        0% {
          height: 80%;
        }
        100% {
          height: 20%;
        }
      }
    }
    .line3 {
      left: 40px;
      -webkit-animation: line3-grow 1s 0.5s ease alternate-reverse infinite;
      animation: line3-grow 1s 0.5s ease alternate-reverse infinite;
      @keyframes line3-grow {
        0% {
          height: 20%;
        }
        100% {
          height: 60%;
        }
      }

      @keyframes line3-grow {
        0% {
          height: 60%;
        }
        100% {
          height: 20%;
        }
      }
    }
    .line4 {
      left: 60px;
      -webkit-animation: line4-grow 1s 0.75s ease alternate-reverse infinite;
      animation: line4-grow 1s 0.75s ease alternate-reverse infinite;

      @keyframes line4-grow {
        0% {
          height: 20%;
        }
        100% {
          height: 40%;
        }
      }

      @keyframes line4-grow {
        0% {
          height: 40%;
        }
        100% {
          height: 20%;
        }
      }
    }
    .line5 {
      left: 80px;
      -webkit-animation: line5-grow 1s 1s ease alternate-reverse infinite;
      animation: line5-grow 1s 1s ease alternate-reverse infinite;

      @keyframes line5-grow {
        0% {
          height: 20%;
        }
        100% {
          height: 100%;
        }
      }

      @keyframes line5-grow {
        0% {
          height: 100%;
        }
        100% {
          height: 20%;
        }
      }
    }
  }
}
</style>
