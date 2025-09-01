import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string,
        css: string,
        javascript: string,

    },
    currentLanguage: "html" | "css" | "javascript",
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: `<div class="page-background">
  <div class="stars"></div>
  <div class="stars2"></div>
  <div class="stars3"></div>
  <div class="showcase">
    <div class="ticket-container" tabindex="0">
      <div class="interaction-grid">
        <div class="grid-cell cell-1-1"></div>
        <div class="grid-cell cell-1-2"></div>
        <div class="grid-cell cell-1-3"></div>
        <div class="grid-cell cell-1-4"></div>
        <div class="grid-cell cell-1-5"></div>
        <div class="grid-cell cell-1-6"></div>
        <div class="grid-cell cell-1-7"></div>
        <div class="grid-cell cell-1-8"></div>
        <div class="grid-cell cell-1-9"></div>
        <div class="grid-cell cell-1-10"></div>
        <div class="grid-cell cell-2-1"></div>
        <div class="grid-cell cell-2-2"></div>
        <div class="grid-cell cell-2-3"></div>
        <div class="grid-cell cell-2-4"></div>
        <div class="grid-cell cell-2-5"></div>
        <div class="grid-cell cell-2-6"></div>
        <div class="grid-cell cell-2-7"></div>
        <div class="grid-cell cell-2-8"></div>
        <div class="grid-cell cell-2-9"></div>
        <div class="grid-cell cell-2-10"></div>
        <div class="grid-cell cell-3-1"></div>
        <div class="grid-cell cell-3-2"></div>
        <div class="grid-cell cell-3-3"></div>
        <div class="grid-cell cell-3-4"></div>
        <div class="grid-cell cell-3-5"></div>
        <div class="grid-cell cell-3-6"></div>
        <div class="grid-cell cell-3-7"></div>
        <div class="grid-cell cell-3-8"></div>
        <div class="grid-cell cell-3-9"></div>
        <div class="grid-cell cell-3-10"></div>
        <div class="grid-cell cell-4-1"></div>
        <div class="grid-cell cell-4-2"></div>
        <div class="grid-cell cell-4-3"></div>
        <div class="grid-cell cell-4-4"></div>
        <div class="grid-cell cell-4-5"></div>
        <div class="grid-cell cell-4-6"></div>
        <div class="grid-cell cell-4-7"></div>
        <div class="grid-cell cell-4-8"></div>
        <div class="grid-cell cell-4-9"></div>
        <div class="grid-cell cell-4-10"></div>
        <div class="grid-cell cell-5-1"></div>
        <div class="grid-cell cell-5-2"></div>
        <div class="grid-cell cell-5-3"></div>
        <div class="grid-cell cell-5-4"></div>
        <div class="grid-cell cell-5-5"></div>
        <div class="grid-cell cell-5-6"></div>
        <div class="grid-cell cell-5-7"></div>
        <div class="grid-cell cell-5-8"></div>
        <div class="grid-cell cell-5-9"></div>
        <div class="grid-cell cell-5-10"></div>
        <div class="grid-cell cell-6-1"></div>
        <div class="grid-cell cell-6-2"></div>
        <div class="grid-cell cell-6-3"></div>
        <div class="grid-cell cell-6-4"></div>
        <div class="grid-cell cell-6-5"></div>
        <div class="grid-cell cell-6-6"></div>
        <div class="grid-cell cell-6-7"></div>
        <div class="grid-cell cell-6-8"></div>
        <div class="grid-cell cell-6-9"></div>
        <div class="grid-cell cell-6-10"></div>
        <div class="grid-cell cell-7-1"></div>
        <div class="grid-cell cell-7-2"></div>
        <div class="grid-cell cell-7-3"></div>
        <div class="grid-cell cell-7-4"></div>
        <div class="grid-cell cell-7-5"></div>
        <div class="grid-cell cell-7-6"></div>
        <div class="grid-cell cell-7-7"></div>
        <div class="grid-cell cell-7-8"></div>
        <div class="grid-cell cell-7-9"></div>
        <div class="grid-cell cell-7-10"></div>
        <div class="grid-cell cell-8-1"></div>
        <div class="grid-cell cell-8-2"></div>
        <div class="grid-cell cell-8-3"></div>
        <div class="grid-cell cell-8-4"></div>
        <div class="grid-cell cell-8-5"></div>
        <div class="grid-cell cell-8-6"></div>
        <div class="grid-cell cell-8-7"></div>
        <div class="grid-cell cell-8-8"></div>
        <div class="grid-cell cell-8-9"></div>
        <div class="grid-cell cell-8-10"></div>
        <div class="grid-cell cell-9-1"></div>
        <div class="grid-cell cell-9-2"></div>
        <div class="grid-cell cell-9-3"></div>
        <div class="grid-cell cell-9-4"></div>
        <div class="grid-cell cell-9-5"></div>
        <div class="grid-cell cell-9-6"></div>
        <div class="grid-cell cell-9-7"></div>
        <div class="grid-cell cell-9-8"></div>
        <div class="grid-cell cell-9-9"></div>
        <div class="grid-cell cell-9-10"></div>
        <div class="grid-cell cell-10-1"></div>
        <div class="grid-cell cell-10-2"></div>
        <div class="grid-cell cell-10-3"></div>
        <div class="grid-cell cell-10-4"></div>
        <div class="grid-cell cell-10-5"></div>
        <div class="grid-cell cell-10-6"></div>
        <div class="grid-cell cell-10-7"></div>
        <div class="grid-cell cell-10-8"></div>
        <div class="grid-cell cell-10-9"></div>
        <div class="grid-cell cell-10-10"></div>
      </div>
      <div class="ticket-flipper">
        <div class="ticket-card ticket-card-front">
          <div class="ticket-border-animation"></div>
          <div class="ticket-base-layer">
            <div class="ticket-header">
              <div class="ticket-title-group">
                <p class="ticket-event-name">UIverse Conf</p>
                <p class="ticket-event-host">Web Developer Summit</p>
              </div>
            </div>
            <div class="ticket-body">
              <div class="ticket-info-item">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  ></path>
                </svg>
                <div class="info-content">
                  <span class="ticket-label">Attendee</span>
                  <p class="ticket-value">Priya Singh</p>
                </div>
              </div>
              <div class="ticket-info-item">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25M3 18.75A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75M3 18.75h18M4.5 12h7.5"
                  ></path>
                </svg>
                <div class="info-content">
                  <span class="ticket-label">Date / Time</span>
                  <p class="ticket-value">19 AUG 2025 / 12:28 PM</p>
                </div>
              </div>
              <div class="ticket-info-item">
                <svg
                  class="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  ></path>
                </svg>
                <div class="info-content">
                  <span class="ticket-label">Location</span>
                  <p class="ticket-value">Hyderabad, India</p>
                </div>
              </div>
            </div>
            <div class="ticket-stub-section">
              <div class="ticket-stub-info">
                <div class="stub-item">
                  <span class="ticket-label">Section</span>
                  <p class="ticket-value">C</p>
                </div>
                <div class="stub-item">
                  <span class="ticket-label">Row</span>
                  <p class="ticket-value">18</p>
                </div>
                <div class="stub-item">
                  <span class="ticket-label">Seat</span>
                  <p class="ticket-value">32</p>
                </div>
              </div>
              <svg class="ticket-qr-code-svg" viewBox="0 0 16 16">
                <path fill="#1A1A2E" d="M6 0H0v6h6zM5 5H1V1h4z"></path>
                <path
                  fill="#1A1A2E"
                  d="M2 2h2v2H2zM0 16h6v-6H0zm1-5h4v4H1z"
                ></path>
                <path
                  fill="#1A1A2E"
                  d="M2 12h2v2H2zm8-12v6h6V0zm5 5h-4V1h4z"
                ></path>
                <path
                  fill="#1A1A2E"
                  d="M12 2h2v2h-2zM2 7H0v2h3V8H2zm5 2h2v2H7zM3 7h2v1H3zm6 5H7v1h1v1h1v-1zM6 7v1H5v1h2V7zm2-3h1v2H8zm1 4v1h2V7H8v1zM7 6h1v1H7zm2 8h2v2H9zm-2 0h1v2H7zm2-3h1v1H9zm0-8V1H8V0H7v4h1V3zm3 11h1v2h-1zm0-2h2v1h-2zm-1 1h1v1h-1zm-1-1h1v1h-1zm4-2v1h1v1h1v-2h-1zm1 3h-1v3h2v-2h-1zm-5-3v1h3V9h-2v1zm2-3v1h2v1h2V7h-2z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="cover-layer">
            <div class="nebula-layer nebula-layer-1"></div>
            <div class="nebula-layer nebula-layer-2"></div>
            <div class="nebula-layer nebula-layer-3"></div>
            <div class="cover-logo-animated">
              <span class="logo-letter">U</span
              ><span class="logo-letter">I</span
              ><span class="logo-letter">v</span
              ><span class="logo-letter">e</span
              ><span class="logo-letter">r</span
              ><span class="logo-letter">s</span
              ><span class="logo-letter">e</span>
            </div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 0px; transition-delay: 0.0s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 0px; transition-delay: 0.05s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 15px; transition-delay: 0.1s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 15px; transition-delay: 0.15s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 30px; transition-delay: 0.2s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 30px; transition-delay: 0.25s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 45px; transition-delay: 0.3s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 45px; transition-delay: 0.35s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 60px; transition-delay: 0.4s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 60px; transition-delay: 0.45s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 75px; transition-delay: 0.0s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 75px; transition-delay: 0.05s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 90px; transition-delay: 0.1s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 90px; transition-delay: 0.15s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 105px; transition-delay: 0.2s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 105px; transition-delay: 0.25s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 120px; transition-delay: 0.3s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 120px; transition-delay: 0.35s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 135px; transition-delay: 0.4s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 135px; transition-delay: 0.45s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 150px; transition-delay: 0.0s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 150px; transition-delay: 0.05s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 165px; transition-delay: 0.1s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 165px; transition-delay: 0.15s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 180px; transition-delay: 0.2s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 180px; transition-delay: 0.25s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 195px; transition-delay: 0.3s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 195px; transition-delay: 0.35s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 210px; transition-delay: 0.4s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 210px; transition-delay: 0.45s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 225px; transition-delay: 0.0s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 225px; transition-delay: 0.05s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 240px; transition-delay: 0.1s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 240px; transition-delay: 0.15s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 255px; transition-delay: 0.2s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 255px; transition-delay: 0.25s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 270px; transition-delay: 0.3s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 270px; transition-delay: 0.35s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 285px; transition-delay: 0.4s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 285px; transition-delay: 0.45s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 300px; transition-delay: 0.5s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 300px; transition-delay: 0.55s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 315px; transition-delay: 0.6s;"
            ></div>
            <div
              class="weave-strip weave-strip-v"
              style="left: 315px; transition-delay: 0.65s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 330px; transition-delay: 0.7s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 345px; transition-delay: 0.75s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 360px; transition-delay: 0.8s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 375px; transition-delay: 0.85s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 390px; transition-delay: 0.9s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 405px; transition-delay: 0.95s;"
            ></div>
            <div
              class="weave-strip weave-strip-h"
              style="top: 420px; transition-delay: 1.0s;"
            ></div>
          </div>
        </div>
        <div class="ticket-card ticket-card-back">
          <div class="holographic-emblem">
            <div class="emblem-logo">UI</div>
          </div>
          <div class="back-text-content">
            <p class="thank-you-text">Thank You for Attending!</p>
            <p class="event-details-text">
              This ticket is your entry to the UIverse Conf. We hope you have an
              inspiring and memorable experience.
            </p>
          </div>
          <div class="fine-print">
            <p>
              Not for resale. No cash value. This ticket is non-transferable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
        css: `.page-background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Inter,
    Arial,
    sans-serif;
  background: linear-gradient(235deg, #000010, #100525, #000010);
  overflow: hidden;
  position: relative;
}
.stars,
.stars2,
.stars3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  background-size: cover;
  animation: move-stars 50s linear infinite;
  transform: translateZ(var(--tz, 0));
}
.stars {
  background-image: radial-gradient(
      1px 1px at 20px 30px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0, 0, 0, 0));
  background-size: 200px 200px;
  animation-duration: 50s;
  --tz: -100px;
}
.stars2 {
  background-image: radial-gradient(
      1px 1px at 10px 50px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 80px 30px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 120px 140px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 170px 180px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 90px, #fff, rgba(0, 0, 0, 0));
  background-size: 300px 300px;
  animation-duration: 100s;
  --tz: -50px;
}
.stars3 {
  background-image: radial-gradient(
      2px 2px at 50px 50px,
      #fff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 100px 100px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 150px 150px, #fff, rgba(0, 0, 0, 0));
  background-size: 400px 400px;
  animation-duration: 150s;
}
@keyframes move-stars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-2000px);
  }
}
.showcase {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.ticket-container {
  width: 340px;
  height: 440px;
  position: relative;
  perspective: 3000px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.ticket-container:hover {
  transform: scale(1.08);
}
.ticket-flipper {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.76, 0, 0.24, 1);
}
.ticket-container:focus-within .ticket-flipper {
  transform: rotateY(180deg) scale(1.05);
}
.ticket-card {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  transform-style: preserve-3d;
  transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))
    scale(var(--sc, 1));
  transition: transform 0.1s ease-out;
  /* box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.297),
    0 0 20px rgba(152, 97, 255, 0.475); */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.ticket-card-back {
  transform: rotateY(180deg);
  background: rgba(0, 0, 23, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
  border: 3px solid rgba(52, 52, 86, 0.5);
  overflow: hidden;
}
.holographic-emblem {
  width: 120px;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.holographic-emblem::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from calc(var(--ry) * 1.5),
    #ff00ff,
    #00e5ff,
    #8a2be2,
    #ff00ff
  );
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(10px);
  animation: spin-holo 6s linear infinite;
}
@keyframes spin-holo {
  to {
    transform: rotate(360deg);
  }
}
.emblem-logo {
  font-size: 48px;
  font-weight: 800;
  color: #fff;
  text-shadow:
    0 0 10px #fff,
    0 0 20px #00e5ff;
  text-decoration: underline;
}
.back-text-content {
  text-align: center;
  color: #f0f0ff;
  z-index: 1;
}
.thank-you-text {
  font-size: 24px;
  font-weight: 700;
  background: conic-gradient(#0037ff, #b950ff, #5c47ff, #f71dff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: holo 5s linear infinite;
  background-size: 180% 180%;
}
.event-details-text {
  font-size: 14px;
  margin-top: 20px;
  color: #babada;
  max-width: 250px;
  margin: 16px auto;
}
.fine-print {
  font-size: 12px;
  color: #c0c0c0;
  text-align: center;
  z-index: 1;
  margin-bottom: 20px;
}
.ticket-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: radial-gradient(
    circle at var(--mx, 50%) var(--my, 50%),
    rgba(255, 255, 255, 0.25),
    transparent 35%
  );
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 3;
  pointer-events: none;
}
.ticket-container:hover .ticket-card::before {
  opacity: 1;
}
.ticket-base-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  mask-image: radial-gradient(circle at 0 75%, transparent 13px, black 13.5px),
    radial-gradient(circle at 100% 75%, transparent 13px, black 13.5px);
  -webkit-mask-image: radial-gradient(
      circle at 0 75%,
      transparent 13px,
      black 13.5px
    ),
    radial-gradient(circle at 100% 75%, transparent 13px, black 13.5px);
  mask-composite: destination-in;
  -webkit-mask-composite: destination-in;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;
}
.ticket-base-layer::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    110deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.25) 50%,
    rgba(255, 255, 255, 0) 80%
  );
  transform: skewX(-25deg);
  transition: left 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1;
}
.ticket-container:hover .ticket-base-layer::before {
  left: 150%;
}
.ticket-base-layer::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  opacity: 0;
  transform-origin: center;
  animation: holographic-shimmer 8s linear infinite;
  transition: opacity 0.5s;
}
.ticket-container:hover .ticket-base-layer::after {
  opacity: 0.3;
}
@keyframes holographic-shimmer {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.ticket-border-animation {
  position: absolute;
  inset: -4px;
  border-radius: 18px;
  overflow: hidden;
  z-index: -1;
}
.ticket-border-animation::before {
  content: "";
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: conic-gradient(#00e5ff, #8a2be2, #ff00ff, #00e5ff);
  animation: border-spin 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s;
}
.ticket-container:hover .ticket-border-animation::before {
  opacity: 1;
}
@keyframes border-spin {
  to {
    transform: rotate(360deg);
  }
}
.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom: 1px solid #343456;
}
.ticket-title-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ticket-event-name {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.5px;
  background: conic-gradient(#00e5ff, #8a2be2, #ff00ff, #00e5ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: holo 6s linear infinite;
  background-size: 200% 200%;
}
.ticket-event-host {
  margin: 0;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #7de6ff;
  text-shadow: 0 0 6px rgba(0, 229, 255, 0.35);
}
.ticket-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 6px;
}
.ticket-info-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.icon {
  width: 22px;
  height: 22px;
  color: #00e5ff;
  flex-shrink: 0;
  margin-top: 2px;
}
.info-content {
  display: flex;
  flex-direction: column;
}
.ticket-label {
  font-size: 11px;
  color: #8a8aaf;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  font-weight: 700;
}
.ticket-value {
  margin: 2px 0 0 0;
  color: #f0f0ff;
  font-size: 18px;
  font-weight: 600;
}
.ticket-stub-section {
  margin-top: auto;
  padding-top: 14px;
  border-top: 2px dashed #343456;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ticket-stub-info {
  display: flex;
  gap: 16px;
}
.stub-item {
  text-align: center;
}
.ticket-qr-code-svg {
  width: 64px;
  height: 64px;
  background: #f0f0ff;
  border-radius: 6px;
  padding: 4px;
  animation: qr-glow 3s infinite alternate;
}
@keyframes qr-glow {
  from {
    box-shadow:
      0 0 5px #00e5ff,
      0 0 10px #00e5ff;
  }
  to {
    box-shadow:
      0 0 10px #8a2be2,
      0 0 20px #8a2be2;
  }
}
@keyframes holo {
  to {
    background-position: -200% center;
  }
}
.cover-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgb(2, 0, 34),
    rgb(29, 0, 48),
    rgb(9, 0, 42)
  );
  border-radius: 16px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform-style: preserve-3d;
  pointer-events: none;
  transition: opacity 0.5s ease-out 0.8s;
  box-shadow:
    inset 5px 5px 10px rgba(69, 4, 148, 0.094),
    inset -5px -5px 7px rgba(219, 244, 255, 0.08);
}
.ticket-container:hover .cover-layer {
  opacity: 0;
}
.nebula-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
  transform-origin: 50% 50%;
}
.nebula-layer-1 {
  background: radial-gradient(circle, #8a2be2 0%, transparent 50%);
  animation: pulse 6s infinite ease-in-out;
}
.nebula-layer-2 {
  background: radial-gradient(circle, #00e5ff 0%, transparent 40%);
  animation: pulse 8s infinite ease-in-out reverse;
}
.nebula-layer-3 {
  background-image: radial-gradient(
      circle at 20% 30%,
      white 1px,
      transparent 1.5px
    ),
    radial-gradient(circle at 80% 70%, white 1px, transparent 1.5px),
    radial-gradient(circle at 50% 50%, white 0.5px, transparent 1px);
  background-size: 100% 100%;
  animation: shimmer 10s infinite linear;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}
@keyframes shimmer {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.weave-strip {
  position: absolute;
  background: linear-gradient(45deg, #00e5ff, #8a2be2);
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
  transition: all 1.2s cubic-bezier(0.83, 0, 0.17, 1);
}
.weave-strip-v {
  width: 15px;
  height: 100%;
  transform: translateY(-101%);
}
.weave-strip-h {
  width: 100%;
  height: 15px;
  transform: translateX(-101%);
}
.ticket-container:hover .weave-strip {
  transform: translate(0, 0);
}
.cover-logo-animated {
  position: absolute;
  display: flex;
  font-size: 48px;
  font-weight: 800;
  color: #ffffff;
}
.ticket-container:hover .cover-logo-animated {
  animation: digital-rift 0.8s forwards;
}
.cover-logo-animated .logo-letter {
  text-shadow: 0 0 15px #00e5ff;
  animation: glitch 4s infinite steps(1);
}
.cover-logo-animated .logo-letter:nth-child(1) {
  animation-delay: 0.1s;
}
.cover-logo-animated .logo-letter:nth-child(2) {
  animation-delay: 0.2s;
}
.cover-logo-animated .logo-letter:nth-child(3) {
  animation-delay: 0.3s;
}
.cover-logo-animated .logo-letter:nth-child(4) {
  animation-delay: 0.4s;
}
.cover-logo-animated .logo-letter:nth-child(5) {
  animation-delay: 0.5s;
}
.cover-logo-animated .logo-letter:nth-child(6) {
  animation-delay: 0.6s;
}
.cover-logo-animated .logo-letter:nth-child(7) {
  animation-delay: 0.7s;
}
@keyframes glitch {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
  50% {
    transform: translate(2px, -2px) skewX(5deg);
    opacity: 0.85;
  }
  51% {
    transform: translate(-2px, 2px) skewX(-5deg);
  }
}
@keyframes digital-rift {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.8) skew(10deg);
    opacity: 0.5;
    filter: blur(2px);
  }
  100% {
    transform: scale(2);
    opacity: 0;
    filter: blur(10px);
  }
}
.interaction-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  z-index: 5;
}
.grid-cell {
  width: 100%;
  height: 100%;
}
.ticket-container {
  --rx: 0deg;
  --ry: 0deg;
  --sc: 1;
  --mx: 50%;
  --my: 50%;
}
.ticket-container:has(.grid-cell:hover) .ticket-flipper .ticket-card {
  will-change: transform;
}
.ticket-container:has(.cell-1-1:hover) {
  --rx: 18deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 5%;
}
.ticket-container:has(.cell-1-2:hover) {
  --rx: 18deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 5%;
}
.ticket-container:has(.cell-1-3:hover) {
  --rx: 18deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 5%;
}
.ticket-container:has(.cell-1-4:hover) {
  --rx: 18deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 5%;
}
.ticket-container:has(.cell-1-5:hover) {
  --rx: 18deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 5%;
}
.ticket-container:has(.cell-1-6:hover) {
  --rx: 18deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 5%;
}
.ticket-container:has(.cell-1-7:hover) {
  --rx: 18deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 5%;
}
.ticket-container:has(.cell-1-8:hover) {
  --rx: 18deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 5%;
}
.ticket-container:has(.cell-1-9:hover) {
  --rx: 18deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 5%;
}
.ticket-container:has(.cell-1-10:hover) {
  --rx: 18deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 5%;
}
.ticket-container:has(.cell-2-1:hover) {
  --rx: 14deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 15%;
}
.ticket-container:has(.cell-2-2:hover) {
  --rx: 14deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 15%;
}
.ticket-container:has(.cell-2-3:hover) {
  --rx: 14deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 15%;
}
.ticket-container:has(.cell-2-4:hover) {
  --rx: 14deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 15%;
}
.ticket-container:has(.cell-2-5:hover) {
  --rx: 14deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 15%;
}
.ticket-container:has(.cell-2-6:hover) {
  --rx: 14deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 15%;
}
.ticket-container:has(.cell-2-7:hover) {
  --rx: 14deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 15%;
}
.ticket-container:has(.cell-2-8:hover) {
  --rx: 14deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 15%;
}
.ticket-container:has(.cell-2-9:hover) {
  --rx: 14deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 15%;
}
.ticket-container:has(.cell-2-10:hover) {
  --rx: 14deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 15%;
}
.ticket-container:has(.cell-3-1:hover) {
  --rx: 10deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 25%;
}
.ticket-container:has(.cell-3-2:hover) {
  --rx: 10deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 25%;
}
.ticket-container:has(.cell-3-3:hover) {
  --rx: 10deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 25%;
}
.ticket-container:has(.cell-3-4:hover) {
  --rx: 10deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 25%;
}
.ticket-container:has(.cell-3-5:hover) {
  --rx: 10deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 25%;
}
.ticket-container:has(.cell-3-6:hover) {
  --rx: 10deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 25%;
}
.ticket-container:has(.cell-3-7:hover) {
  --rx: 10deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 25%;
}
.ticket-container:has(.cell-3-8:hover) {
  --rx: 10deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 25%;
}
.ticket-container:has(.cell-3-9:hover) {
  --rx: 10deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 25%;
}
.ticket-container:has(.cell-3-10:hover) {
  --rx: 10deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 25%;
}
.ticket-container:has(.cell-4-1:hover) {
  --rx: 6deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 35%;
}
.ticket-container:has(.cell-4-2:hover) {
  --rx: 6deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 35%;
}
.ticket-container:has(.cell-4-3:hover) {
  --rx: 6deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 35%;
}
.ticket-container:has(.cell-4-4:hover) {
  --rx: 6deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 35%;
}
.ticket-container:has(.cell-4-5:hover) {
  --rx: 6deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 35%;
}
.ticket-container:has(.cell-4-6:hover) {
  --rx: 6deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 35%;
}
.ticket-container:has(.cell-4-7:hover) {
  --rx: 6deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 35%;
}
.ticket-container:has(.cell-4-8:hover) {
  --rx: 6deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 35%;
}
.ticket-container:has(.cell-4-9:hover) {
  --rx: 6deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 35%;
}
.ticket-container:has(.cell-4-10:hover) {
  --rx: 6deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 35%;
}
.ticket-container:has(.cell-5-1:hover) {
  --rx: 2deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 45%;
}
.ticket-container:has(.cell-5-2:hover) {
  --rx: 2deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 45%;
}
.ticket-container:has(.cell-5-3:hover) {
  --rx: 2deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 45%;
}
.ticket-container:has(.cell-5-4:hover) {
  --rx: 2deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 45%;
}
.ticket-container:has(.cell-5-5:hover) {
  --rx: 2deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 45%;
}
.ticket-container:has(.cell-5-6:hover) {
  --rx: 2deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 45%;
}
.ticket-container:has(.cell-5-7:hover) {
  --rx: 2deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 45%;
}
.ticket-container:has(.cell-5-8:hover) {
  --rx: 2deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 45%;
}
.ticket-container:has(.cell-5-9:hover) {
  --rx: 2deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 45%;
}
.ticket-container:has(.cell-5-10:hover) {
  --rx: 2deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 45%;
}
.ticket-container:has(.cell-6-1:hover) {
  --rx: -2deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 55%;
}
.ticket-container:has(.cell-6-2:hover) {
  --rx: -2deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 55%;
}
.ticket-container:has(.cell-6-3:hover) {
  --rx: -2deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 55%;
}
.ticket-container:has(.cell-6-4:hover) {
  --rx: -2deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 55%;
}
.ticket-container:has(.cell-6-5:hover) {
  --rx: -2deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 55%;
}
.ticket-container:has(.cell-6-6:hover) {
  --rx: -2deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 55%;
}
.ticket-container:has(.cell-6-7:hover) {
  --rx: -2deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 55%;
}
.ticket-container:has(.cell-6-8:hover) {
  --rx: -2deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 55%;
}
.ticket-container:has(.cell-6-9:hover) {
  --rx: -2deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 55%;
}
.ticket-container:has(.cell-6-10:hover) {
  --rx: -2deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 55%;
}
.ticket-container:has(.cell-7-1:hover) {
  --rx: -6deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 65%;
}
.ticket-container:has(.cell-7-2:hover) {
  --rx: -6deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 65%;
}
.ticket-container:has(.cell-7-3:hover) {
  --rx: -6deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 65%;
}
.ticket-container:has(.cell-7-4:hover) {
  --rx: -6deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 65%;
}
.ticket-container:has(.cell-7-5:hover) {
  --rx: -6deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 65%;
}
.ticket-container:has(.cell-7-6:hover) {
  --rx: -6deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 65%;
}
.ticket-container:has(.cell-7-7:hover) {
  --rx: -6deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 65%;
}
.ticket-container:has(.cell-7-8:hover) {
  --rx: -6deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 65%;
}
.ticket-container:has(.cell-7-9:hover) {
  --rx: -6deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 65%;
}
.ticket-container:has(.cell-7-10:hover) {
  --rx: -6deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 65%;
}
.ticket-container:has(.cell-8-1:hover) {
  --rx: -10deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 75%;
}
.ticket-container:has(.cell-8-2:hover) {
  --rx: -10deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 75%;
}
.ticket-container:has(.cell-8-3:hover) {
  --rx: -10deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 75%;
}
.ticket-container:has(.cell-8-4:hover) {
  --rx: -10deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 75%;
}
.ticket-container:has(.cell-8-5:hover) {
  --rx: -10deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 75%;
}
.ticket-container:has(.cell-8-6:hover) {
  --rx: -10deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 75%;
}
.ticket-container:has(.cell-8-7:hover) {
  --rx: -10deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 75%;
}
.ticket-container:has(.cell-8-8:hover) {
  --rx: -10deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 75%;
}
.ticket-container:has(.cell-8-9:hover) {
  --rx: -10deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 75%;
}
.ticket-container:has(.cell-8-10:hover) {
  --rx: -10deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 75%;
}
.ticket-container:has(.cell-9-1:hover) {
  --rx: -14deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 85%;
}
.ticket-container:has(.cell-9-2:hover) {
  --rx: -14deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 85%;
}
.ticket-container:has(.cell-9-3:hover) {
  --rx: -14deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 85%;
}
.ticket-container:has(.cell-9-4:hover) {
  --rx: -14deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 85%;
}
.ticket-container:has(.cell-9-5:hover) {
  --rx: -14deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 85%;
}
.ticket-container:has(.cell-9-6:hover) {
  --rx: -14deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 85%;
}
.ticket-container:has(.cell-9-7:hover) {
  --rx: -14deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 85%;
}
.ticket-container:has(.cell-9-8:hover) {
  --rx: -14deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 85%;
}
.ticket-container:has(.cell-9-9:hover) {
  --rx: -14deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 85%;
}
.ticket-container:has(.cell-9-10:hover) {
  --rx: -14deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 85%;
}
.ticket-container:has(.cell-10-1:hover) {
  --rx: -18deg;
  --ry: -18deg;
  --mx: 5%;
  --my: 95%;
}
.ticket-container:has(.cell-10-2:hover) {
  --rx: -18deg;
  --ry: -14deg;
  --mx: 15%;
  --my: 95%;
}
.ticket-container:has(.cell-10-3:hover) {
  --rx: -18deg;
  --ry: -10deg;
  --mx: 25%;
  --my: 95%;
}
.ticket-container:has(.cell-10-4:hover) {
  --rx: -18deg;
  --ry: -6deg;
  --mx: 35%;
  --my: 95%;
}
.ticket-container:has(.cell-10-5:hover) {
  --rx: -18deg;
  --ry: -2deg;
  --mx: 45%;
  --my: 95%;
}
.ticket-container:has(.cell-10-6:hover) {
  --rx: -18deg;
  --ry: 2deg;
  --mx: 55%;
  --my: 95%;
}
.ticket-container:has(.cell-10-7:hover) {
  --rx: -18deg;
  --ry: 6deg;
  --mx: 65%;
  --my: 95%;
}
.ticket-container:has(.cell-10-8:hover) {
  --rx: -18deg;
  --ry: 10deg;
  --mx: 75%;
  --my: 95%;
}
.ticket-container:has(.cell-10-9:hover) {
  --rx: -18deg;
  --ry: 14deg;
  --mx: 85%;
  --my: 95%;
}
.ticket-container:has(.cell-10-10:hover) {
  --rx: -18deg;
  --ry: 18deg;
  --mx: 95%;
  --my: 95%;
}
`,
        javascript: ``,
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType["currentLanguage"]>) => {
            state.currentLanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload
        },
        updateFullCode: (state, action: PayloadAction<CompilerSliceStateType["fullCode"]>) => {
            state.fullCode = action.payload
        },
    },
});

export default compilerSlice.reducer
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } = compilerSlice.actions