import React from "react";
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  outlook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      {...props}
    >
      <path
        fill="#c7ede6"
        d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"
      ></path>
      <path
        fill="#fdfcef"
        d="M75.875,31.5c0,0,3.64,0,6.125,0s4.5-2.015,4.5-4.5c0-2.333-1.782-4.229-4.055-4.455 C82.467,22.364,82.5,22.187,82.5,22c0-2.485-2.015-4.5-4.5-4.5c-1.438,0-2.703,0.686-3.527,1.736 C74.333,16.6,72.171,14.5,69.5,14.5c-2.761,0-5,2.239-5,5c0,0.446,0.077,0.87,0.187,1.282C64.045,20.005,63.086,19.5,62,19.5 c-1.781,0-3.234,1.335-3.455,3.055C58.364,22.533,58.187,22.5,58,22.5c-2.485,0-4.5,2.015-4.5,4.5s2.015,4.5,4.5,4.5s9.5,0,9.5,0 h5.375V32h3V31.5z"
      ></path>
      <path
        fill="#472b29"
        d="M69.5,14c-3.033,0-5.5,2.467-5.5,5.5c0,0.016,0,0.031,0,0.047C63.398,19.192,62.71,19,62,19 c-1.831,0-3.411,1.261-3.858,3.005C58.095,22.002,58.048,22,58,22c-2.757,0-5,2.243-5,5s2.243,5,5,5h14.875 c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H58c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.117,0,0.23,0.017,0.343,0.032l0.141,0.019 c0.021,0.003,0.041,0.004,0.062,0.004c0.246,0,0.462-0.185,0.495-0.437C59.232,21.125,60.504,20,62,20 c0.885,0,1.723,0.401,2.301,1.1c0.098,0.118,0.241,0.182,0.386,0.182c0.078,0,0.156-0.018,0.228-0.056 c0.209-0.107,0.314-0.346,0.254-0.573C65.054,20.218,65,19.852,65,19.5c0-2.481,2.019-4.5,4.5-4.5 c2.381,0,4.347,1.872,4.474,4.263c0.011,0.208,0.15,0.387,0.349,0.45c0.05,0.016,0.101,0.024,0.152,0.024 c0.15,0,0.296-0.069,0.392-0.192C75.638,18.563,76.779,18,78,18c2.206,0,4,1.794,4,4c0,0.117-0.017,0.23-0.032,0.343l-0.019,0.141 c-0.016,0.134,0.022,0.268,0.106,0.373c0.084,0.105,0.207,0.172,0.34,0.185C84.451,23.247,86,24.949,86,27c0,2.206-1.794,4-4,4 h-6.125c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H82c2.757,0,5-2.243,5-5c0-2.397-1.689-4.413-4.003-4.877 C82.999,22.082,83,22.041,83,22c0-2.757-2.243-5-5-5c-1.176,0-2.293,0.416-3.183,1.164C74.219,15.76,72.055,14,69.5,14L69.5,14z"
      ></path>
      <path
        fill="#472b29"
        d="M68,21c-1.403,0-2.609,0.999-2.913,2.341C64.72,23.119,64.301,23,63.875,23 c-1.202,0-2.198,0.897-2.353,2.068C61.319,25.022,61.126,25,60.937,25c-1.529,0-2.811,1.2-2.918,2.732 C58.01,27.87,58.114,27.99,58.251,28c0.006,0,0.012,0,0.018,0c0.13,0,0.24-0.101,0.249-0.232c0.089-1.271,1.151-2.268,2.419-2.268 c0.229,0,0.47,0.042,0.738,0.127c0.022,0.007,0.045,0.01,0.067,0.01c0.055,0,0.11-0.02,0.156-0.054 C61.962,25.537,62,25.455,62,25.375c0-1.034,0.841-1.875,1.875-1.875c0.447,0,0.885,0.168,1.231,0.473 c0.047,0.041,0.106,0.063,0.165,0.063c0.032,0,0.063-0.006,0.093-0.019c0.088-0.035,0.148-0.117,0.155-0.212 C65.623,22.512,66.712,21.5,68,21.5c0.208,0,0.425,0.034,0.682,0.107c0.023,0.007,0.047,0.01,0.07,0.01 c0.109,0,0.207-0.073,0.239-0.182c0.038-0.133-0.039-0.271-0.172-0.309C68.517,21.04,68.256,21,68,21L68,21z"
      ></path>
      <path
        fill="#472b29"
        d="M81.883,22.5c-1.326,0-2.508,0.897-2.874,2.182c-0.038,0.133,0.039,0.271,0.172,0.309 C79.205,24.997,79.228,25,79.25,25c0.109,0,0.209-0.072,0.24-0.182C79.795,23.748,80.779,23,81.883,23 c0.117,0,0.23,0.014,0.342,0.029c0.012,0.002,0.023,0.003,0.035,0.003c0.121,0,0.229-0.092,0.246-0.217 c0.019-0.137-0.077-0.263-0.214-0.281C82.158,22.516,82.022,22.5,81.883,22.5L81.883,22.5z"
      ></path>
      <path
        fill="#fff"
        d="M16.405,51H6.5C6.224,51,6,50.776,6,50.5S6.224,50,6.5,50h9.905c0.276,0,0.5,0.224,0.5,0.5 S16.682,51,16.405,51z"
      ></path>
      <path
        fill="#fff"
        d="M19.5,51h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S19.777,51,19.5,51z"
      ></path>
      <path
        fill="#fff"
        d="M24.491,53H15.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h8.991c0.276,0,0.5,0.224,0.5,0.5 S24.767,53,24.491,53z"
      ></path>
      <path
        fill="#fff"
        d="M13.5,53h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S13.777,53,13.5,53z"
      ></path>
      <path
        fill="#fff"
        d="M10.5,53h-2C8.224,53,8,52.776,8,52.5S8.224,52,8.5,52h2c0.276,0,0.5,0.224,0.5,0.5 S10.777,53,10.5,53z"
      ></path>
      <path
        fill="#fff"
        d="M16.5,55h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S16.776,55,16.5,55z"
      ></path>
      <path
        fill="#fff"
        d="M19.5,46c-0.177,0-0.823,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,0.823,0,1,0c0.276,0,0.5-0.224,0.5-0.5C20,46.224,19.776,46,19.5,46z"
      ></path>
      <path
        fill="#fff"
        d="M19.5,48c-0.177,0-4.823,0-5,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,4.823,0,5,0c0.276,0,0.5-0.224,0.5-0.5C20,48.224,19.776,48,19.5,48z"
      ></path>
      <path
        fill="#fff"
        d="M24.5,50c-0.177,0-2.823,0-3,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.177,0,2.823,0,3,0c0.276,0,0.5-0.224,0.5-0.5C25,50.224,24.776,50,24.5,50z"
      ></path>
      <path
        fill="#fff"
        d="M88.5,66h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S88.776,66,88.5,66z"
      ></path>
      <path
        fill="#fff"
        d="M92.5,66h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S92.776,66,92.5,66z"
      ></path>
      <path
        fill="#fff"
        d="M97.5,68h-10c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h10c0.276,0,0.5,0.224,0.5,0.5 S97.777,68,97.5,68z"
      ></path>
      <path
        fill="#fff"
        d="M85.5,68h-1c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1c0.276,0,0.5,0.224,0.5,0.5 S85.776,68,85.5,68z"
      ></path>
      <path
        fill="#fff"
        d="M82.375,68H80.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.875c0.276,0,0.5,0.224,0.5,0.5 S82.651,68,82.375,68z"
      ></path>
      <path
        fill="#fff"
        d="M91.5,64h-5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5 S91.777,64,91.5,64z"
      ></path>
      <path
        fill="#fff"
        d="M88.5,70h-2c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h2c0.276,0,0.5,0.224,0.5,0.5 S88.776,70,88.5,70z"
      ></path>
      <path
        fill="#355ca8"
        d="M74.088,49.446l-8.323-4.849v14.17h9.234V51.03C74.999,50.378,74.652,49.775,74.088,49.446z"
      ></path>
      <path fill="#2d80d3" d="M36.11,32h12.222v13H36.11V32z"></path>
      <path fill="#55a7f9" d="M48.332,32h12.222v12H48.332V32z"></path>
      <path fill="#6accff" d="M60.5,32h12.277v12H60.5V32z"></path>
      <path
        fill="#2d80d3"
        d="M48.332,43.5h12.222l-0.055,11h-12L48.332,43.5z"
      ></path>
      <path
        fill="#0553a4"
        d="M48.5,54.5h12l0.055,11.389H48.332L48.5,54.5"
      ></path>
      <path fill="#4792dd" d="M60.555,43.5h12.222v10.889H60.555V43.5z"></path>
      <path fill="#0262b8" d="M60.555,54.5h12.222v11.389H60.555V54.5z"></path>
      <path
        fill="#1e65d6"
        d="M72.777,32.489H36.11v-2.044c0-1.351,1.094-2.444,2.444-2.444h31.778 c1.351,0,2.444,1.094,2.444,2.444V32.489z"
      ></path>
      <path
        fill="#4792dd"
        d="M37.5,72.5c0.413,0.321,1.376-0.5,1.941-0.5h14.672h18.333c1.351,0,2.444-1.094,2.444-2.444V51.222 L37.5,72.5z"
      ></path>
      <polygon
        fill="#472b29"
        points="37.624,72.717 37.376,72.283 74.766,51.005 75.014,51.439"
      ></polygon>
      <path
        fill="#55a7f9"
        d="M36.11,51.222v18.333c0,1.351,1.094,2.444,2.444,2.444h18.333h14.672c0.565,0,1.528,0.821,1.941,0.5 L36.11,51.222z"
      ></path>
      <path
        fill="#472b29"
        d="M72.859,73H38.154c-1.733,0-3.145-1.411-3.145-3.145V30.145c0-1.734,1.411-3.145,3.145-3.145h32.678 c1.733,0,3.145,1.411,3.145,3.145v18.466c1.15,0.225,2.021,1.241,2.022,2.456l0,0C76,51.835,76.008,64.51,76.004,69.863 c-0.001,1.125-0.618,2.17-1.609,2.726c-0.204,0.107-0.322,0.163-0.447,0.209c-0.062,0.022-0.126,0.042-0.192,0.061 c-0.161,0.047-0.239,0.069-0.319,0.084C73.249,72.979,73.058,73,72.859,73z M38.154,28.4c-0.962,0-1.744,0.782-1.744,1.744v39.711 c0,0.962,0.782,1.744,1.744,1.744h34.705c0.108,0,0.214-0.013,0.316-0.032c0.034-0.006,0.067-0.017,0.1-0.027 c0.003,0,0.096-0.027,0.099-0.028c0.157-0.052,0.223-0.084,0.288-0.118c0.606-0.339,0.941-0.902,0.941-1.532 c0.004-5.352-0.004-18.025-0.005-18.793c0,0,0,0,0-0.001c0-0.608-0.494-1.103-1.103-1.103h-0.22c-0.387,0-0.7-0.313-0.7-0.7v-19.12 c0-0.962-0.782-1.744-1.744-1.744H38.154z"
      ></path>
      <rect width="37" height=".5" x="36" y="32.25" fill="#472b29"></rect>
      <rect width="12.5" height=".5" x="60.5" y="43.25" fill="#472b29"></rect>
      <path
        fill="#472b29"
        d="M60.5,39.75c-0.138,0-0.25-0.112-0.25-0.25v-7c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25v7 C60.75,39.638,60.638,39.75,60.5,39.75z"
      ></path>
      <path
        fill="#472b29"
        d="M48.5,43.75c-0.138,0-0.25-0.112-0.25-0.25v-11c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25 v11C48.75,43.638,48.638,43.75,48.5,43.75z"
      ></path>
      <path
        fill="#472b29"
        d="M60.5,59.65c-0.138,0-0.25-0.112-0.25-0.25V41.5c0-0.138,0.112-0.25,0.25-0.25s0.25,0.112,0.25,0.25 v17.9C60.75,59.538,60.638,59.65,60.5,59.65z"
      ></path>
      <polygon
        fill="#472b29"
        points="73.09,52.4 72.59,52.4 72.59,43.75 48.5,43.75 48.5,43.25 73.09,43.25"
      ></polygon>
      <path
        fill="#472b29"
        d="M69.1,54.75H50.5c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25h18.6 c0.138,0,0.25,0.112,0.25,0.25S69.237,54.75,69.1,54.75z"
      ></path>
      <path
        fill="#472b29"
        d="M63.477,67.046c-0.042,0-0.085-0.011-0.124-0.033L35.986,51.439 c-0.12-0.068-0.161-0.221-0.093-0.341c0.067-0.121,0.22-0.162,0.341-0.094l27.366,15.574c0.119,0.068,0.161,0.221,0.093,0.341 C63.647,67,63.563,67.046,63.477,67.046z"
      ></path>
      <path
        fill="#472b29"
        d="M66.666,68.861c-0.042,0-0.085-0.011-0.124-0.033l-1.073-0.611c-0.12-0.068-0.161-0.221-0.093-0.341 c0.068-0.121,0.221-0.161,0.341-0.094l1.073,0.611c0.12,0.068,0.161,0.221,0.093,0.341C66.837,68.815,66.753,68.861,66.666,68.861z"
      ></path>
      <path
        fill="#472b29"
        d="M73.5,72.75c-0.042,0-0.085-0.011-0.124-0.033l-5.006-2.849c-0.119-0.068-0.161-0.221-0.093-0.341 c0.068-0.121,0.22-0.162,0.341-0.094l5.006,2.849c0.119,0.068,0.161,0.221,0.093,0.341C73.671,72.705,73.587,72.75,73.5,72.75z"
      ></path>
      <path
        fill="#2d80d3"
        d="M46.172,63H25.548c-1.424,0-2.578-1.164-2.578-2.6V39.6c0-1.436,1.154-2.6,2.578-2.6h20.624 c1.424,0,2.578,1.164,2.578,2.6v20.8C48.75,61.836,47.596,63,46.172,63z"
      ></path>
      <path
        fill="#2d80d3"
        d="M25.548,62c-0.87,0-1.578-0.718-1.578-1.6V39.6c0-0.882,0.708-1.6,1.578-1.6h20.624 c0.87,0,1.578,0.718,1.578,1.6v20.8c0,0.882-0.708,1.6-1.578,1.6H25.548z"
      ></path>
      <path
        fill="#472b29"
        d="M46.172,38.4c0.65,0,1.178,0.538,1.178,1.2v20.8c0,0.662-0.528,1.2-1.178,1.2H25.548 c-0.65,0-1.178-0.538-1.178-1.2V39.6c0-0.662,0.528-1.2,1.178-1.2H46.172 M46.172,37H25.548c-1.424,0-2.578,1.163-2.578,2.6v20.8 c0,1.437,1.154,2.6,2.578,2.6h20.624c1.424,0,2.578-1.163,2.578-2.6V39.6C48.75,38.163,47.596,37,46.172,37L46.172,37z"
      ></path>
      <path
        fill="#fff"
        d="M35.86,43.511c-3.802,0-6.093,2.905-6.093,6.489s2.282,6.489,6.093,6.489 c3.812,0,6.093-2.905,6.093-6.488C41.953,46.416,39.662,43.511,35.86,43.511z M35.86,54.299c-2.157,0-3.447-1.924-3.447-4.297 s1.296-4.297,3.447-4.297s3.448,1.925,3.448,4.297S38.016,54.299,35.86,54.299z"
      ></path>
      <path
        fill="#472b29"
        d="M35.86,56.739c-3.734,0-6.343-2.771-6.343-6.739s2.608-6.739,6.343-6.739s6.343,2.771,6.343,6.74 C42.203,53.968,39.595,56.739,35.86,56.739z M35.86,43.761c-3.44,0-5.843,2.565-5.843,6.239s2.402,6.239,5.843,6.239 s5.843-2.565,5.843-6.237C41.703,46.327,39.301,43.761,35.86,43.761z M35.86,54.548c-2.177,0-3.697-1.87-3.697-4.547 s1.521-4.547,3.697-4.547s3.697,1.87,3.697,4.547S38.037,54.548,35.86,54.548z M35.86,45.954c-1.883,0-3.197,1.665-3.197,4.047 s1.314,4.047,3.197,4.047s3.197-1.664,3.197-4.047S37.743,45.954,35.86,45.954z"
      ></path>
      <g>
        <path
          fill="#fdfcef"
          d="M38.5,78.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C42.473,71.366,42.5,71.187,42.5,71c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C28.128,69.714,27.592,69.5,27,69.5 c-1.228,0-2.245,0.887-2.455,2.055C24.366,71.527,24.187,71.5,24,71.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V79h7V78.5z"
        ></path>
        <path
          fill="#472b29"
          d="M40.25,74C40.112,74,40,73.888,40,73.75c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C40.5,73.888,40.388,74,40.25,74z"
        ></path>
        <circle cx="33.5" cy="78.5" r=".5" fill="#472b29"></circle>
        <path
          fill="#472b29"
          d="M42,79h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H42c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C41.975,71.314,42,71.16,42,71 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C35.58,67.165,34.141,66,32.5,66c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C27.878,70.155,27.449,70,27,70c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C24.314,72.025,24.16,72,24,72c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S31.776,79,31.5,79H24c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C24.588,69.82,25.711,69,27,69c0.349,0,0.689,0.061,1.011,0.18C28.176,66.847,30.126,65,32.5,65c1.831,0,3.466,1.127,4.153,2.774 C37.333,67.276,38.155,67,39,67c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C44.739,71.59,46,73.169,46,75 C46,77.206,44.206,79,42,79z"
        ></path>
        <path
          fill="#472b29"
          d="M36.5,78c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C37,78.224,36.776,78,36.5,78z"
        ></path>
      </g>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};