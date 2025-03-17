// import React, { useRef, useEffect, useState, useCallback } from "react";

// // Utility function to extract video ID from a YouTube URL
// const getVideoIdFromUrl = (url: string): string | null => {
//   const match = url.match(/(?:v=|\/v\/|youtu\.be\/|\/embed\/)([^&?/]+)/);
//   return match ? match[1] : null;
// };

// // Main Component
// const YouTubePlayer = ({
//   isDetail,
//   url,
// }: {
//   isDetail: boolean;
//   url: string;
// }) => {
//   const videoRef = useRef<HTMLDivElement | null>(null);
//   const [player, setPlayer] = useState<null>(null);
//   const [isPlayerReady, setIsPlayerReady] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   const videoId = getVideoIdFromUrl(url);

//   // Initialize the YouTube Player
//   const initializePlayer = useCallback(() => {
//     if (!videoRef.current || !videoId) return;

//     const playerOptions = {
//       videoId,
//       playerVars: isDetail
//         ? {
//             autoplay: 1,
//             mute: 1,
//           }
//         : undefined,
//     };

//     const newPlayer = new YT.Player(videoRef.current, {
//       ...playerOptions,
//       events: {
//         onReady: () => setIsPlayerReady(true),
//       },
//     });

//     setPlayer(newPlayer);
//   }, [videoId, isDetail]);

//   // Load the YouTube API script and initialize the player
//   useEffect(() => {
//     if (window.YT && window.YT.Player) {
//       initializePlayer();
//     } else {
//       const tag = document.createElement("script");
//       tag.src = "https://www.youtube.com/iframe_api";
//       tag.onload = () => {
//         window.YT.ready(() => initializePlayer());
//       };
//       document.body.appendChild(tag);
//     }
//   }, [initializePlayer]);

//   // Watch for URL changes
//   useEffect(() => {
//     if (player && videoId) {
//       player.loadVideoById(videoId);
//       if (isPlayerReady) {
//         player.playVideo();
//       }
//     }
//   }, [url, videoId, player, isPlayerReady]);

//   // Play function
//   const play = () => {
//     if (player) {
//       player.playVideo();
//       player.unMute();
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div>
//       <div style={{ display: "none" }} ref={videoRef}></div>

//       {isDetail && isOpen && (
//         <Modal>
//           <Card>
//             <h1 className="text-center text-3xl">Activate song</h1>
//             <p>
//               For consent purposes, we would like to ask your permission to play
//               the song provided by the website creator. Would you like to play
//               the song?
//             </p>
//             <div className="flex gap-5 flex-col">
//               <button onClick={play} className="btn btn-green">
//                 Yes
//               </button>
//               <button onClick={() => setIsOpen(false)} className="btn btn-red">
//                 No
//               </button>
//             </div>
//           </Card>
//         </Modal>
//       )}
//     </div>
//   );
// };

// // Modal Component (Placeholder)
// const Modal = ({ children }: { children: React.ReactNode }) => (
//   <div className="modal">{children}</div>
// );

// // Card Component (Placeholder)
// const Card = ({ children }: { children: React.ReactNode }) => (
//   <div className="card">{children}</div>
// );

// export default YouTubePlayer;
