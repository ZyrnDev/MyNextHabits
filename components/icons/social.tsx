/* eslint-disable react/jsx-key */
import { createIcon } from "@chakra-ui/icons";

// // https://downloadfreesvgicons.com/icons/technology-icons/svg-email-envelope-icon-1/svg-email-envelope-icon-1.php
// export const EmailIcon = createIcon({
//   displayName: "EmailIcon",
//   viewBox: "0 0 100 100",
//   path: (
//     <>
//       <path d="M84,75H16c-3.3,0-6-2.7-6-6V31c0-3.3,2.7-6,6-6h68c3.3,0,6,2.7,6,6v38C90,72.3,87.3,75,84,75z"/>
//       <g>
//         <line x1="50" y1="56.7" x2="12.2" y2="27.1"/>
//         <line x1="50.2" y1="56.7" x2="88" y2="27.1"/>
//       </g>
//       <line x1="17.9" y1="65.5" x2="38.8" y2="49"/>
//       <line x1="81.8" y1="65.5" x2="60.9" y2="49"/>
//     </>
//   ),
//   defaultProps: {
//     fill: "none",
//     stroke: "#000",
//     strokeWidth: "4",
//     strokeMiterlimit: "10",
//     strokeLinecap: "round",
//     strokeLinejoin: "round",
//   },
// });

export const WebsiteIcon = createIcon({
  displayName: 'WebsiteIcon',
  viewBox: '0 0 420 420',
  path: (
    <>
      <path strokeWidth="26" d="M209,15a195,195 0 1,0 2,0z"/>
      <path strokeWidth="18" d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"/>
    </>
  ),
  defaultProps: {
    fill: "none",
    stroke: "currentColor",
  },
});
  
export const GithubIcon = createIcon({
  displayName: 'GithubIcon',
  viewBox: '0 0 16 16',
  path: (<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>),
  defaultProps: {
    fill: "currentColor",
  },
});

export const GitlabIcon = createIcon({
  displayName: 'GitlabIcon',
  viewBox: '120 280 340 5',
  path: (<path d="M461.514,298.355l-18.049-55.587c0.008,0.025,0.011,0.051,0.019,0.076c-0.009-0.029-0.014-0.058-0.022-0.087,c-0.001-0.002-0.001-0.003-0.001-0.005c0-0.001,0-0.002,0-0.002l-35.83-110.31c-1.96-5.811-7.353-9.711-13.536-9.663,c-6.201,0.032-11.446,3.857-13.364,9.748L346.721,237.23H239.408l-34.074-104.712c-1.916-5.886-7.162-9.71-13.362-9.742,c-0.025,0-0.049,0-0.075,0c-6.105,0-11.509,3.876-13.49,9.752l-35.732,110.211l-0.005,0.014c0,0.001,0,0.002,0,0.003,c-0.009,0.028-0.013,0.056-0.022,0.084c0.008-0.025,0.011-0.051,0.019-0.076l-18.115,55.591c-2.725,8.392,0.232,17.512,7.36,22.697,L288.328,434.7c0.023,0.017,0.049,0.027,0.072,0.044c0.067,0.048,0.132,0.097,0.2,0.142c-0.064-0.043-0.124-0.09-0.187-0.134,c0,0,0-0.001-0.001-0.001c0.01,0.008,0.022,0.013,0.033,0.02c0.009,0.006,0.018,0.01,0.027,0.016,c0.001,0.001,0.002,0.002,0.004,0.003c0.242,0.168,0.493,0.322,0.753,0.463c0.036,0.02,0.068,0.045,0.104,0.064,c0.001,0,0.001,0.001,0.002,0.001c0.022,0.011,0.042,0.025,0.064,0.036c0.017,0.008,0.035,0.013,0.051,0.021,c0.012,0.006,0.025,0.01,0.037,0.015c0.029,0.014,0.061,0.023,0.09,0.038c0.136,0.065,0.279,0.118,0.419,0.175,c0.131,0.054,0.258,0.117,0.392,0.164c0.006,0.002,0.011,0.005,0.017,0.007c0.022,0.008,0.042,0.019,0.065,0.027,c0.028,0.01,0.055,0.021,0.083,0.03c0.011,0.003,0.022,0.005,0.033,0.008c0.035,0.011,0.073,0.016,0.108,0.026,c0.013,0.004,0.028,0.006,0.042,0.01c0.188,0.057,0.383,0.098,0.577,0.141c0.076,0.017,0.149,0.041,0.226,0.055,c0.011,0.002,0.021,0.006,0.033,0.008c0.025,0.005,0.048,0.014,0.074,0.018c0.041,0.007,0.081,0.02,0.123,0.026,c0.033,0.005,0.067,0.003,0.1,0.008c0.006,0.001,0.011,0,0.017,0.001c0.002,0,0.003,0,0.005,0c0.369,0.053,0.743,0.09,1.124,0.09,c0.002,0,0.004,0,0.007,0l0,0c0.001,0,0.002,0,0.002,0c0,0,0.001,0,0.001,0c0.001,0,0.002,0,0.003,0,c0.382,0,0.756-0.037,1.126-0.09c0.001,0,0.003,0,0.004,0c0.006-0.001,0.012,0,0.018-0.001c0.033-0.005,0.068-0.003,0.101-0.008,c0.042-0.007,0.082-0.019,0.124-0.026c0.025-0.004,0.048-0.013,0.073-0.018c0.011-0.002,0.021-0.006,0.032-0.008,c0.078-0.015,0.153-0.039,0.231-0.056c0.191-0.042,0.383-0.083,0.57-0.139c0.013-0.004,0.026-0.005,0.039-0.009,c0.037-0.011,0.075-0.016,0.112-0.027c0.011-0.004,0.023-0.005,0.034-0.008c0.029-0.009,0.057-0.021,0.085-0.031,c0.022-0.008,0.042-0.019,0.064-0.027c0.006-0.002,0.011-0.005,0.017-0.007c0.142-0.05,0.276-0.116,0.415-0.173,c0.129-0.054,0.261-0.102,0.387-0.162c0.031-0.015,0.064-0.024,0.094-0.039c0.012-0.006,0.026-0.01,0.038-0.016,c0.017-0.008,0.035-0.013,0.052-0.022c0.023-0.012,0.045-0.026,0.067-0.037c0,0,0.001,0,0.001-0.001,c0.037-0.019,0.07-0.046,0.107-0.066c0.258-0.14,0.508-0.293,0.749-0.46c0.019-0.013,0.041-0.023,0.061-0.037,c0.005-0.004,0.011-0.006,0.016-0.01c0.023-0.017,0.05-0.028,0.073-0.045l156.44-113.65,C461.282,315.867,464.239,306.747,461.514,298.355z M394.194,142.774l30.68,94.456h-61.36L394.194,142.774z M419.501,253.202,l-12.519,16.041L314.648,387.55l43.677-134.348H419.501z M285.428,430.707C285.428,430.707,285.428,430.707,285.428,430.707,c0.008,0.024,0.021,0.046,0.029,0.071C285.449,430.753,285.436,430.731,285.428,430.707z M271.42,387.558L166.624,253.202l0,0,h61.18L271.42,387.558z M191.875,142.773l30.737,94.457h-61.36L191.875,142.773z M141.304,308.133,c-1.516-1.103-2.144-3.05-1.563-4.838l13.466-41.325l98.67,126.502L141.304,308.133z M288.053,434.489,c-0.031-0.025-0.061-0.052-0.091-0.078c-0.006-0.005-0.012-0.012-0.019-0.017c-0.06-0.05-0.119-0.101-0.177-0.153,c-0.114-0.099-0.226-0.2-0.333-0.306c0.009,0.008,0.019,0.015,0.028,0.023c0.012,0.011,0.025,0.02,0.037,0.031,c0.229,0.219,0.47,0.425,0.722,0.615c0.003,0.002,0.005,0.005,0.008,0.007c0.012,0.009,0.022,0.02,0.034,0.03,		C288.193,434.591,288.121,434.543,288.053,434.489z M293.028,402.392l-25.665-79.059l-22.766-70.131h96.933L293.028,402.392z M298.281,434.241c-0.06,0.052-0.118,0.104-0.179,0.154c-0.007,0.006-0.014,0.013-0.021,0.019c-0.031,0.025-0.06,0.052-0.09,0.077,		c-0.066,0.053-0.138,0.101-0.207,0.152c0.012-0.009,0.022-0.021,0.035-0.029c0.002-0.002,0.004-0.004,0.006-0.006,		c0.252-0.19,0.492-0.394,0.719-0.613c0.009-0.009,0.02-0.016,0.029-0.024c0.012-0.011,0.025-0.02,0.036-0.031,		C298.503,434.043,298.392,434.143,298.281,434.241z M444.766,308.13l-110.557,80.317l98.703-126.467l13.412,41.307,C446.906,305.083,446.279,307.03,444.766,308.13z"/>),
  defaultProps: {
    fill: "currentColor",
  },
});

export const DiscordIcon = createIcon({
  displayName: 'DiscordIcon',
  viewBox: '0 0 71 55',
  path: (<path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>),
  defaultProps: {
    fill: "currentColor",
  },
});

export const LinkedinIcon = createIcon({
  displayName: 'LinkedinIcon',
  viewBox: '0 0 24 24',
  path: (<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>),
  defaultProps: {
    fill: "currentColor",
  },
});