function createPrompts(...rest) {
  const prompt = `((masterpiece)), (best quality), 1girl, cinnamon brown hair, medium length hair, blue eyes, full body, cheerleader outfit, medium breasts, pink outfit, longer skirt, mouth open, happy, excited, cheering, ((looking up))`;

  const negativePrompt = ``;

  return { prompt, negativePrompt };
}
// ------------------------------------------------------------------

export const general_negative_prompt =
  "(low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2), bad-hands-5";

// 1. zero two image 1
const ai0 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/Zero_Two_3_zg1vfo.png";
  "https://cdn.stablediffusionapi.com/generations/1687810701_out.png";
const ai0_ar = "1/1";
let ai0_prompt =
  "zero two (darling in the franxx), darling in the franxx, 1girl, ascot, bangs, blue background, green eyes, hairband, horns, long hair, long sleeves, looking at viewer, red jacket, closed jacket, military uniform, oni horns, orange ascot, pink hair, red horns, simple background, smile, solo, standing, uniform, white hairband, ((masterpiece))";
let ai0_negative_prompt = `${general_negative_prompt}`;

// 2. motorcycle girl 1
const ai1 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/anime_and_motorcycle_1_gm7jos.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815163_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/anime_and_motorcycle_1_gm7jos.png?raw=true";

const ai1_ar = "2/3";
let ai1_prompt =
  "masterpiece, best quality, 1mwoman, solo, jacket, sports bra, hand in pocket, school bag, black hair, brown eyes, cyberpunk, street, machinery, motor vehicle, motorcycle, panorama, blue background, riding";
let ai1_negative_prompt = `${general_negative_prompt}`;

// 3. motorcycle guy 1
const ai2 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/anime_and_motorcycle_2_wi5dxj.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815266_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/anime_and_motorcycle_2_wi5dxj.png?raw=true";
const ai2_ar = "2/3";
let ai2_prompt =
  "masterpiece, best quality, 1man, solo, jacket, hand in pocket, school bag, black hair, black eyes, cyberpunk, street, machinery, motor vehicle, motorcycle, panorama, sunglasses, blue background, riding";
let ai2_negative_prompt = `${general_negative_prompt}`;

// 4. bunny girl 1
const ai3 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/Bunny_Girls_3_kwyub7.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815346_out.png";
  "https://raw.githubusercontent.com/LombaxTech/img-container/main/Bunny_Girls_3_kwyub7.png";

const ai3_ar = "1/1";
let ai3_prompt =
  "1girl, animal ears, armband, ass visible through thighs, bangs, blush, bow, bowtie, breasts, covered navel, cowboy shot, detached collar, fake animal ears, fishnet pantyhose, fishnets, from below, groin, horns, leotard, long hair, looking at viewer, looking down, medium breasts, night sky, city background, pantyhose, brown hair, black playboy bunny, rabbit ears, black leotard, skin tight, solo, straight hair, thighs, smug, wrist cuffs";
let ai3_negative_prompt = `${general_negative_prompt}`;

// 5. cyberpunk girl 1
const ai4 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089547/AnimAI%202/used/cyberpunk_V2_4_kpjouw.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815429_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/cyberpunk_V2_4_kpjouw.png?raw=true";
const ai4_ar = "1/1";
let ai4_prompt = "a portrait of a girl wearing a red kimono,cyberpunk";
let ai4_negative_prompt = `${general_negative_prompt}`;

// 6. school girl 1;
const ai5 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089547/AnimAI%202/used/first_batch_5_nluhgi.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815517_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/first_batch_5_nluhgi.png?raw=true";
const ai5_ar = "1/1";
let ai5_prompt =
  "masterpiece, best quality, 1girl, school uniform, virtual youtuber, genshin impact, smile, face focus";
let ai5_negative_prompt = `${general_negative_prompt}`;

// 7. school girl 2;
const ai6 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089547/AnimAI%202/used/first_batch_3_ynjm3u.png";
  // "https://cdn.stablediffusionapi.com/generations/1687815632_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/first_batch_3_ynjm3u.png?raw=true";
const ai6_ar = "1/1";
let ai6_prompt =
  "masterpiece, best quality, 1girl, school uniform, virtual youtuber, genshin impact, smile, face focus, brown hair";
let ai6_negative_prompt = `${general_negative_prompt}`;

//  8. ghibli girl 1;
const ai7 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089548/AnimAI%202/used/Ghibli-ish_style_4_r5mrlk.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825281_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Ghibli-ish_style_4_r5mrlk.png?raw=true";
const ai7_ar = "1/1";
let ai7_prompt =
  "masterpiece, best quality, 1girl, brown cardigan, red beret, dark brown hair, snowy background, drawn by studio ghibli, studio ghibli (style)";
let ai7_negative_prompt = `${general_negative_prompt}`;

// 9. ghibli girl 2;
const ai8 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089548/AnimAI%202/used/Ghibli-ish_style_9_j1i2jr.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825346_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Ghibli-ish_style_9_j1i2jr.png?raw=true";
const ai8_ar = "2/3";
let ai8_prompt =
  "masterpiece, best quality, 1girl, brown cardigan, red beret, ((green hair)), snowy background, drawn by studio ghibli, studio ghibli (style)";
let ai8_negative_prompt = `${general_negative_prompt}`;

// 10. pocky game 1
const ai9 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089550/AnimAI%202/used/Pocky_Game_1_n0dqzq.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825421_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Pocky_Game_1_n0dqzq.png?raw=true";
const ai9_ar = "1/1";
let ai9_prompt =
  "2girls, blue hair, blonde hair, neko ears, closed eyes, upper body, view from side, indoors, simple background, sharing food, pocky, pocky kiss, hands out of frame";
let ai9_negative_prompt = `${general_negative_prompt}`;

// 11. surrounded by people 1
const ai10 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089550/AnimAI%202/used/surrounded_by_people_2_ojs6gd.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825473_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/surrounded_by_people_2_ojs6gd.png?raw=true";
const ai10_ar = "2/3";
let ai10_prompt =
  "1girl, solo focus, blue hair, blushing, close-up, detailed face, upper body, standing on the sidewalk in the city, (crowd in background), detailed background, depth of field, bokeh, photo background, ";
let ai10_negative_prompt = `${general_negative_prompt}`;

// 12. surrounded by people 2
const ai11 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089550/AnimAI%202/used/surrounded_by_people_5_u7kx0l.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825551_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/surrounded_by_people_5_u7kx0l.png?raw=true";
const ai11_ar = "1/1";
let ai11_prompt =
  "1girl, solo focus, blonde hair, cat ears, blushing, close-up, detailed face, upper body, standing on the sidewalk in the city, (crowd in background), detailed background, depth of field, bokeh, photo background, <lora:plasticmodel_V1:1>";
let ai11_negative_prompt = `${general_negative_prompt}`;

// 13. shirtlift 1 UNUSED
// const ai12 =
//   "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089549/AnimAI%202/used/shirtlift_3_rkynu7.png";
// const ai12_ar = "2/3";
// let ai12_prompt =
//   "1girl, (masterpiece), (best quality), best quality, ultra detailed, 1girl, solo, standing, white hair, bunny ears, military uniform,shirtlift, nipples, breasts, naked , NSFW, looking at viewer";
// let ai12_negative_prompt = "";

// 14. ghibli girl 3
const ai13 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089548/AnimAI%202/used/Ghibli-ish_style_5_ey9sja.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825625_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Ghibli-ish_style_5_ey9sja.png?raw=true";

const ai13_ar = "1/1";
let ai13_prompt =
  "masterpiece, best quality, 1girl, brown cardigan, red beret, snowy background, drawn by studio ghibli, studio ghibli (style),";
let ai13_negative_prompt = `${general_negative_prompt}`;

// 15. skirt lift 1 UNUSED
// const ai14 =
//   "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089550/AnimAI%202/used/skirtlift_8_b0osdr.png";
// const ai14_ar = "2/3";
// let ai14_prompt = "";
// let ai14_negative_prompt = "";

// 16. pocky game 2 nsfw
// const ai15 =
//   "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089549/AnimAI%202/used/NSFW_pocky_game_3_uk5sfs.png";
// const ai15_ar = "1/1";
// let ai15_prompt =
//   "2girls, PrinzV4, red hair, blonde hair, naked, nude, exposed breasts, nipples, NSFW, closed eyes, upper body, view from side, indoors, simple background, sharing food, pocky, pocky kiss, hands out of frame";
// let ai15_negative_prompt = "";

// 17. motorcycle girl 2
const ai16 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089547/AnimAI%202/used/anime_and_motorcycle_10_gsiyfi.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825693_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/anime_and_motorcycle_10_gsiyfi.png?raw=true";
const ai16_ar = "2/3";
let ai16_prompt =
  "masterpiece, best quality, 1mwoman, solo, jacket, sports bra, hand in pocket, school bag, black hair, brown eyes, cyberpunk, street, machinery, motor vehicle, motorcycle, panorama, blue background, riding";
let ai16_negative_prompt = `${general_negative_prompt}`;

// 18. motorcycle girl 3
const ai17 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/anime_and_motorcycle_8_sj4n54.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825821_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/anime_and_motorcycle_8_sj4n54.png?raw=true";
const ai17_ar = "2/3";
let ai17_prompt =
  "masterpiece, best quality, 1mwoman, solo, jacket, sports bra, hand in pocket, school bag, black hair, brown eyes, cyberpunk, street, machinery, motor vehicle, motorcycle, panorama, blue background, riding";
let ai17_negative_prompt = `${general_negative_prompt}`;

// 19. tarot style 1
const ai18 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089546/AnimAI%202/used/Tarot_style_2_i1efga.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825893_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Tarot_style_2_i1efga.png?raw=true";
const ai18_ar = "2/3";
let ai18_prompt =
  "(((masterpiece))),(((bestquality))),((ultra-detailed)),(illustration),((anextremelydelicateandbeautiful)),dynamicangle,floating,(beautifuldetailedeyes),(detailedlight) (1girl), solo, floating_hair,glowingeyes,green hair,greeneyes, twintails, halterdress, green background";
let ai18_negative_prompt = `${general_negative_prompt}`;

// 20. blond office lady 1
const ai19 =
  // "https://res.cloudinary.com/dhrowvziz/image/upload/v1681089549/AnimAI%202/used/Office_Lady_Blonde_3_rjhgal.png";
  // "https://cdn.stablediffusionapi.com/generations/1687825893_out.png";
  "https://github.com/LombaxTech/img-container/blob/main/Office_Lady_Blonde_3_rjhgal.png?raw=true";

const ai19_ar = "1/1";
let ai19_prompt =
  "masterpiece, best quality, 1girl, arms behind head, arms up, bangs, black choker, black skirt, blonde hair, blush, choker, cleavage, collarbone, collared shirt, glasses, huge breasts, very long hair, long sleeves, looking at viewer, office lady, teacher, mature female, parted lips, red eyes, round eyewear, see-through, smile, solo, sweat, nipples, upper body, wet clothes, white shirt";
let ai19_negative_prompt = `${general_negative_prompt}`;

// 21. pink maid
const ai20 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681946850_out.png";
const ai20_ar = "2/3";
let ai20_prompt =
  "masterpiece, best quality, full body portrait, 1girl, anime, 3D, pixar, realistic, 1girl, smiling, cute face, white hair braided into bun, maid, pink maid dress (white accent), collar bowtie, buttoned cuffs, medevial kitchen background, pink blush, freckles, dimples, rose pink lips, true light, super hero style, pink and white frilly maid dress, puffy shoulders, beautiful, sexy, colourful, nsfw, smooth skin, large bold eyelashes, illustration, artstation, painting by stanley artgerm lau, sideways glance, foreshortening, extremely detailed 8K, smooth, high resolution, ultra quality, highly detail eyes, highly detail mouth, highly detailed face, perfect eyes, both eyes are the same, glare, Iridescent, Global illumination, real hair movement, realistic light, realistic shadow, real face, hd, 2k, 4k, 8k, 16k";
let ai20_negative_prompt = `${general_negative_prompt} painting by bad-artist-anime, painting by bad-artist, lowres, disfigured, ostentatious, oversaturated, grain, low resolution, disfigured, blurry, bad anatomy, disfigured, poorly drawn face, mutant, extra limb, ugly, poorly drawn hands, missing limbs, blurred, floating limbs, disjointed limbs, deformed hands, blurred, out of focus, long neck, long body, (cropped), distorted, imperfect, (bad hands), error, worst quality, low quality, normal quality, signature, watermark, username, blurry, artist name, extra limbs, (extra fingers), conjoined fingers, deformed fingers, ugly eyes, imperfect eyes, skewed eyes, unnatural face, stiff face, stiff body, unbalanced body, unnatural body, details are not clear, (ugly hands), imperfect hands`;

// 22. tea girl
const ai21 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681947460_out.png";
const ai21_ar = "2/3";
let ai21_prompt =
  "(Beautiful young woman holding book in café sitting in chair:1.0),(long chestnut hair over shoulders:1.0),(flowing knee-high sundress with floral pattern:1.0),(slim fit body:1.0),(cozy and inviting café atmosphere:1.1), (drinking tea), (soft sunlight streaming through the windows:1.2), (charming and peaceful ambiance:1.0),(soft rustling of pages turning:1.0), sandals, dreamy eyes, (best quality:1.1),  (volumetric lighting:1.1), depth of field, , intricate, refined, digital painting, pixiv fanbox, (by Pascal Campion:1.0), (by Jenny Yu:1.0), (by WLOP:1.0), hands,";
let ai21_negative_prompt = `${general_negative_prompt} lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, (duplicate), morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, (extra arms), (extra legs), fused fingers, too many fingers, long neck`;

// 23. robot girl
const ai22 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681947780_out.png";
const ai22_ar = "2/3";
let ai22_prompt =
  "masterpiece,best quality,CG,wallpaper,HDR,high quality,high-definition,extremely detailed, 1girl, cloud, sky, aqua eyes, night, big breasts, night sky, short hair, looking at viewer, (cyan hair with pink streaks ), (cyberpunk city), Tokyo, (dark atmosphere), glare, Iridescent, Global illumination, real hair movement, realistic light, realistic shadow robots extremely detailed 8K, high resolution";
let ai22_negative_prompt = `${general_negative_prompt} (Multiple people},lowres,bad anatomy,bad hands, text, error, missing fingers,extra digit, fewer digits, cropped, worstquality, low quality, normal quality,jpegartifacts,signature, watermark, username,blurry,bad feet,cropped,poorly drawn hands,poorly drawn face,mutation,deformed,worst quality,low quality,normal quality,jpeg artifacts,signature,watermark,extra fingers,fewer digits,extra limbs,extra arms,extra legs,malformed limbs,fused fingers,too many fingers,long neck,cross-eyed,mutated hands,polar ,bad body,bad proportions,gross proportions,text,error,missing fingers,missing arms,missing legs,extra digit`;

// 24. swimsuit
const ai23 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681948015_out.png";
const ai23_ar = "2/3";
let ai23_prompt =
  "anime girl, black competition swimsuit, black hair, short hair, wet clothes, indoor pool, thick thighs";
let ai23_negative_prompt = `${general_negative_prompt} (((big hands))), (((ugly mouth, ugly eyes, missing teeth, crooked teeth, close-up, cropped, out of frame))), duplicate, blurry, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, bad anatomy, tilt, watermark, watermarked`;

// 25. witch (not so great)
const ai24 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681948418_out.png";
const ai24_ar = "2/3";
let ai24_prompt =
  "1girl, large breasts witch inside a magical item shop, fantasy potion vendor, wide angle, pastel color, glowing light, iridescent, ultra detailed, perfect octane render highly detailed, god rays, style by studio ghibli 4K, insanely detailed ";
let ai24_negative_prompt = `${general_negative_prompt} Nsfw nude blurry pixelated out of frame low resolution poor quality grainy monochrome extra fingers`;

// 26. modern girl in rain
const ai25 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681948906_out.png";
const ai25_ar = "2/3";
let ai25_prompt =
  "   a young woman, street smiling, backpack, ponytails, epic realistic, photo, faded, complex stuff around, intricate background, soaking wet, neutral colors, ((((hdr)))), ((((muted colors)))), intricate scene, artstation, intricate details, vignette";
let ai25_negative_prompt = `${general_negative_prompt} Ugly, Watermark, Morbid, Extra fingers, Poorly drawn hands, Mutation, Blurry, Extra limbs, Gross proportions, Missing arms, Mutated hands, Long neck, Duplicate, Mutilated, Mutilated hands, Poorly drawn face, Deformed, Bad anatomy, Cloned face, Malformed limbs, Missing legs, Too many finger, tiling, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, blurry, bad anatomy, blurred, grainy, signature, cut off, draft, deformed arms, deformed hands, double right arms, double left arms, deformed wrists, deformed deltoids, deformed biceps, deformed neck, deformed thorax, deformed bones, signatures, logos, phrases, words, duplicate headsUgly, Watermark, Morbid, Extra fingers, Poorly drawn hands, Mutation, Blurry, Extra limbs, Gross proportions, Missing arms, Mutated hands, Long neck, Duplicate, Mutilated, Mutilated hands, Poorly drawn face, Deformed, Bad anatomy, Cloned face, Malformed limbs, Missing legs, Too many finger, tiling, poorly drawn feet, poorly drawn face, out of frame, extra limbs, disfigured, deformed, body out of frame, blurry, bad anatomy, blurred, grainy, signature, cut off, draft, deformed arms, deformed hands, double right arms, double left arms, deformed wrists, deformed deltoids, deformed biceps, deformed neck, deformed thorax, deformed bones, signatures, logos, phrases, words, duplicate heads`;

// 27. young girl in woods
const ai26 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681952784_out.png";
const ai26_ar = "2/3";
let ai26_prompt =
  "1girl, brown hair, green eyes, colorful, autumn, cumulonimbus clouds, lighting, blue sky, falling leaves, garden";
let ai26_negative_prompt = `${general_negative_prompt}`;

// 28. closed eyes girl
const ai27 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681953043_out.png";
const ai27_ar = "2/3";
let ai27_prompt =
  "(((masterpiece, best quality))), (((kiss, kiss face, close eyes, (((looking up, portrait))), solo focus))),, brown to golden hair, short hair, Shaved boyish handsome short hairstyle , bangs, blue to green eyes, large detailed eyes, short stature, Petite, very cute, (looking at viewer, so beautiful), school uniform, serafuku, White sailor collar, white shirt, short sleeve shirt, very long skirt, pleated skirt, dark gray to black skirt, red neckerchief, (1boy 1girl, beautiful girl, large detailed eyes, big breasts, nice style), (((Outdoors, parks, meeting places, green parks, roadside trees, standing with your head down, hands folded behind your back))),";
let ai27_negative_prompt = `${general_negative_prompt} ugly, ugly, ugly, ugly, duplicating, duplicating, duplicating, morbid, morbid, amputated, amputated, out of frame, extra fingers, mutated hands, poorly drawn hand, poorly drawn face, poorly drawn face, mutation, mutation, mutation, deformed, deformed, deformed, blurry, bad anatomy, bad anatomy, bad proportions, bad proportions, bad proportions, extra limbs, cloned face, deformed, deformed, deformed, two or more nipples, two or more nipples, malformed limbs, missing arms, missing arms, legs missing, missing leg, extra arm, extra arm, extra leg, extra leg, mutated hand, fused fingers, too many fingers, long neck, long neck, long neck, crossed eyes, crossed eyes, deformation, 2 or more nipples, 10 or more fingers, 10 or fewer fingers, 2 or more nipples, mutation, mutant, 2 or more arms, malformed, distorted face, 2 or more hands, fusion fingers, 2 or more arms, deformed hands, 2 or more breasts, whole body out of frame, 5 or more fingers on hands, multiple faces, multiple headsHide`;

// 29. black outfit girl
const ai28 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681953309_out.png";
const ai28_ar = "2/3";
let ai28_prompt =
  "girl, sexy pose with weapon, harness, skintight military nano suit, earphone with microphone, holstered pistol, taut small boobs, erect nipples, vagina, very short ponytail, perfect eyes, both eyes are the same, perfect face, photo, faded, complex stuff around, intricate background, soaking wet, neutral colors, ((((hdr)))), ((((muted colors)))), intricate scene, artstation, intricate details, vignette";
let ai28_negative_prompt = `${general_negative_prompt} deformed, bad anatomy, disfigured, poorly drawn face, mutation, mutated, extra limb, ugly, disgusting, poorly drawn hands, missing limb, floating limbs, disconnected limbs, malformed hands, blurry, ((((mutated hands and fingers)))), watermark, watermarked, oversaturated, censored, distorted hands, amputation, missing hands, obese, doubled face, double hands, realistic eyes`;

// 30. pink kimono girl
const ai29 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681953883_out.png";
const ai29_ar = "2/3";
let ai29_prompt =
  "(((masterpiece))) 1girl, pink kimono kamado nezuko  high resolution, looking at viewer, beautiful detailed background, solo, upper body, (((wind blowing))) glowing light, (((falling leaves))), (((light particles))) ((debris))";
let ai29_negative_prompt = `${general_negative_prompt} Low resolution, bad anatomy, bad face, bad hands, bad body, bad feet, bad proportions, {bad leg}, {{{more legs}}}, worst quality, low quality, normal quality, gross proportions, blurry, poorly drawn, text, error, missing fingers, missing arms, missing legs, short legs, extra digit, 2girls, long skirt, indoors, out of frame, only_upper body, only_lower body, low background, distorted perspective`;

// 31. cat girl kimono
const ai30 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681954102_out.png";
const ai30_ar = "2/3";
let ai30_prompt =
  "((the hand has five fingers, one thumb and four fingers)), masterpiece, best quality, highly detailed, 1girl, solo, (:3:0.9), animal ear fluff, animal ears, orange hair, fluffy hair, blush, brown eyes, flower, fox ears, fox girl, gradient, gradient background, hair flower, hair ornament, japanese clothes, kimono, looking at viewer, miko, smile, solo, white kimono, beautiful lighting";
let ai30_negative_prompt = `${general_negative_prompt} (worst quality, low quality:1.4), bad anatomy, bad proportions, ugly, disfigured, extra heads, extra ears, extra limbs, extra arms, extra hands, extra fingers, extra legs, fewer digits, malformed limbs, missing arms, missing legs, fused fingers, long neck, uneven breasts, gaping asshole, gaping pussy, monocrome, children, kids, text, logo, signature, watermark, username, artist name`;

// 32. samurai bloody girl
const ai31 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681954349_out.png";
const ai31_ar = "2/3";
let ai31_prompt =
  "1girl, samurai with a mask, bloody battle, blood, colorful, winter, clouds, lighting, falling snow, highly detailed, trending, masterpiece";
let ai31_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2), bad-hands-5`;

// 33. astronaut girl
const ai32 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681954701_out.png";
const ai32_ar = "2/3";
let ai32_prompt =
  "RAW, analog style, film grain, skin details, high detailed, 8k hdr, dslr, film grain, skin details, young woman, smiling, cute face, short hair, astronaut helmet, starry universe background, true light, super hero style, bodysuit, pin-up, beautiful, sexy, colorful, smooth skin, sideways glance, perfect eyes, both eyes are the same, glare, real hair movement";
let ai32_negative_prompt = `${general_negative_prompt} bad anatomy, missing arm, missing legs, blurred face, clone faces, double human figure, double head, signature, six fingers, deformed, ugly, duplicate, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, cross eyed, make a face, roll one’s eyes, three legs, three hands, four hands, out of frame`;

// 34. fitness couple running
const ai33 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681956297_out.png";
const ai33_ar = "2/3";
let ai33_prompt =
  "Fitness Couple running in park cherry blossom falling grand scale digital art insanely detailed highres detailed faces shiny skin toned god rays ethereal dust particles 1boy 1girl ";
let ai33_negative_prompt =
  "Nudity Low resolution, bad anatomy, bad face, bad hands, bad body, bad feet, bad proportions, {bad leg}, worst quality, low quality, normal quality, gross proportions, blurry, poorly drawn, text, error, missing fingers, missing arms, missing legs, short legs, extra digit ,";

// 35. couple holding each other in field

const ai34 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681956678_out.png";
const ai34_ar = "1/1";
let ai34_prompt =
  "1boy kissing 1girl, blond hair, golden eyes, beautiful eyes, detail, flower meadow, red roses, cumulonimbus clouds, lighting, detailed sky, garden ";
let ai34_negative_prompt = `${general_negative_prompt} Nudity Low resolution, bad anatomy, bad face, bad hands, bad body, bad feet, bad proportions, {bad leg}, worst quality, low quality, normal quality, gross proportions, blurry, poorly drawn, text, error, missing fingers, missing arms, missing legs, short legs, extra digit ,`;

// 36. rainbow cheerleader
const ai35 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681957048_out.png";
const ai35_ar = "2/3";
let ai35_prompt = "cheerleader, rainbow hair";
let ai35_negative_prompt = `${general_negative_prompt}`;

// 37. karate gi girl

const ai36 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1681957495_out.png";
const ai36_ar = "2/3";
let ai36_prompt =
  "Woman in (karate Gi) (incoming attack) detailed Dojo exterior background highly detailed best quality";
let ai36_negative_prompt = `${general_negative_prompt} Sfw censored lowres worst quality, low quality, normal quality, blurry, poorly drawn, text, error, conjoined, mutated, legs cropped out, old, ancient cropped legs, bad anatomy, multiple angles multiple views short skirt nsfw child kids preteen`;

// 38. knight boy

let ai37 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682015457_out.png";
let ai37_ar = "2/3";
let ai37_prompt =
  "1boy, smile, knight armor, carrying sword and shield, dynamic pose, castle background, looking at viewer, best quality, masterpiece";
let ai37_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2)`;

//  39. knight girl

let ai38 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682015872_out.png";
let ai38_ar = "2/3";
let ai38_prompt =
  "1girl, smile, kni  ght armor, carrying sword and shield, dynamic pose, castle background, looking at viewer, best quality, masterpiece";
let ai38_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2)`;

// 40. pirate girl

let ai39 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682016207_out.png";
let ai39_ar = "2/3";
let ai39_prompt =
  "1girl, smile, pirate, pirate hat, eyepatch, carrying sword, dynamic pose, pirate ship background, looking at viewer, best quality, masterpiece";
let ai39_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2)`;

// 41. pirate boy

let ai40 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682016539_out.png";
let ai40_ar = "2/3";
let ai40_prompt =
  "1boy, smile, pirate, pirate hat, eyepatch, carrying sword, dynamic pose, pirate ship background, looking at viewer, best quality, masterpiece";
let ai40_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2)`;

// 42. military girl

let ai41 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682016892_out.png";
let ai41_ar = "2/3";
let ai41_prompt =
  "1girl, mature, military uniform, military hat, city background, battleground, looking at viewer, best quality, masterpiece";
let ai41_negative_prompt = `${general_negative_prompt} (low quality:1.3), (worst quality:1.3),(monochrome:0.8),(deformed:1.3),(malformed hands:1.4),(poorly drawn hands:1.4),(mutated fingers:1.4),(bad anatomy:1.3),(extra limbs:1.35),(poorly drawn face:1.4),(signature:1.2),(artist name:1.2),(watermark:1.2)`;

// 43. military boy

let ai42 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017093_out.png";
let ai42_ar = "2/3";
let ai42_prompt =
  "1boy, military uniform, military hat, city background, mainbattle tank, battleground, looking at viewer, best quality, masterpiece";
let ai42_negative_prompt = `${general_negative_prompt} `;

// 44. bikini swimming pool

let ai43 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017474_out.png";
let ai43_ar = "2/3";
let ai43_prompt =
  "1girl, smile, blush, bikini, swimming pool background, looking at viewer, best quality, masterpiece";
let ai43_negative_prompt = `${general_negative_prompt}`;

// 45. swimming pool boy

let ai44 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017572_out.png";
let ai44_ar = "2/3";
let ai44_prompt =
  "1boy, swimming pool, shirtless, shorts, swimming, wet, looking at viewer, best quality, masterpiece";
let ai44_negative_prompt = `${general_negative_prompt}`;

// 46. kawaii girl

let ai45 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017678_out.png";
let ai45_ar = "2/3";
let ai45_prompt =
  "1girl, chibi girl, cute face, cute eyes, looking at viewer, best quality, masterpiece";
let ai45_negative_prompt = `${general_negative_prompt}`;

// 47. chibi

let ai46 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017771_out.png";
let ai46_ar = "1/1";
let ai46_prompt =
  "a chibi version of a cute girl, (chibi:1), cute face, cute eyes, looking at viewer, best quality, masterpiece";
let ai46_negative_prompt = `${general_negative_prompt}`;

// 48. bunny girl

let ai47 =
  "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/1682017944_out.png";
let ai47_ar = "2/3";
let ai47_prompt =
  "1girl, smile, blush,long hair, bangs, animal ears, rabbit ears, black leotard, playboy bunny, fishnet pantyhose, white gloves, arm behind back";
let ai47_negative_prompt = `${general_negative_prompt}`;

// 49. landscape

let ai48 = "";
let ai48_ar = "";
let ai48_prompt = "";
let ai48_negative_prompt = ``;

// 50.
let ai49 = "";
let ai49_ar = "";
let ai49_prompt = "";
let ai49_negative_prompt = ``;

//-------------------------------------------

export const animeAiImages = [
  {
    // zero two
    imageUrl: ai0,
    aspectRatio: ai0_ar,
    NSFW: false,
    Premium: false,
    prompt: ai0_prompt,
    negativePrompt: ai0_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // motorcycle girl 1
    imageUrl: ai1,
    aspectRatio: ai1_ar,
    NSFW: false,
    Premium: false,
    prompt: ai1_prompt,
    negativePrompt: ai1_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // motorcycle guy
    imageUrl: ai2,
    aspectRatio: ai2_ar,
    NSFW: false,
    Premium: false,
    prompt: ai2_prompt,
    negativePrompt: ai2_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // bunny girl
    imageUrl: ai3,
    aspectRatio: ai3_ar,
    NSFW: false,
    Premium: false,
    prompt: ai3_prompt,
    negativePrompt: ai3_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // cyberpunk
    imageUrl: ai4,
    aspectRatio: ai4_ar,
    NSFW: false,
    Premium: false,
    prompt: ai4_prompt,
    negativePrompt: ai4_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // school girl1
    imageUrl: ai5,
    aspectRatio: ai5_ar,
    NSFW: false,
    Premium: false,
    prompt: ai5_prompt,
    negativePrompt: ai5_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // school
    imageUrl: ai6,
    aspectRatio: ai6_ar,
    NSFW: false,
    Premium: false,
    prompt: ai6_prompt,
    negativePrompt: ai6_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // ghibli dark brown hair
    imageUrl: ai7,
    aspectRatio: ai7_ar,
    NSFW: false,
    Premium: false,
    prompt: ai7_prompt,
    negativePrompt: ai7_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // ghibli green hair
    imageUrl: ai8,
    aspectRatio: ai8_ar,
    NSFW: false,
    Premium: false,
    prompt: ai8_prompt,
    negativePrompt: ai8_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // pocky game
    imageUrl: ai9,
    aspectRatio: ai9_ar,
    // NSFW: true,
    Premium: false,
    prompt: ai9_prompt,
    negativePrompt: ai9_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // lost in crowd blue
    imageUrl: ai10,
    aspectRatio: ai10_ar,
    NSFW: false,
    Premium: false,
    prompt: ai10_prompt,
    negativePrompt: ai10_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // lost in crowd blond
    imageUrl: ai11,
    aspectRatio: ai11_ar,
    NSFW: false,
    Premium: false,
    prompt: ai11_prompt,
    negativePrompt: ai11_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  // {
  //   imageUrl: ai12,
  //   aspectRatio: ai12_ar,
  //   NSFW: true,
  //   Premium: false,
  //   prompt: ai12_prompt,
  //   negativePrompt: ai12_negative_prompt,
  //   createPrompt: function () {
  //     console.log("creating prompt...");
  //   },
  // },
  {
    // ghibli
    imageUrl: ai13,
    aspectRatio: ai13_ar,
    NSFW: false,
    Premium: false,
    prompt: ai13_prompt,
    negativePrompt: ai13_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  // {
  //   imageUrl: ai14,
  //   aspectRatio: ai14_ar,
  //   NSFW: true,
  //   Premium: false,
  //   prompt: ai14_prompt,
  //   negativePrompt: ai14_negative_prompt,
  //   createPrompt: function () {
  //     console.log("creating prompt...");
  //   },
  // },
  // {
  //   imageUrl: ai15,
  //   aspectRatio: ai15_ar,
  //   NSFW: true,
  //   Premium: false,
  //   prompt: ai15_prompt,
  //   negativePrompt: ai15_negative_prompt,
  //   createPrompt: function () {
  //     console.log("creating prompt...");
  //   },
  // },
  {
    // motorcycle girl 3
    imageUrl: ai16,
    aspectRatio: ai16_ar,
    NSFW: false,
    Premium: false,
    prompt: ai16_prompt,
    negativePrompt: ai16_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // motorcyle girl 4
    imageUrl: ai17,
    aspectRatio: ai17_ar,
    NSFW: false,
    Premium: false,
    prompt: ai17_prompt,
    negativePrompt: ai17_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // tarot, not so good
    imageUrl: ai18,
    aspectRatio: ai18_ar,
    NSFW: false,
    Premium: false,
    prompt: ai18_prompt,
    negativePrompt: ai18_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // office lady blonde
    imageUrl: ai19,
    aspectRatio: ai19_ar,
    NSFW: false,
    Premium: false,
    prompt: ai19_prompt,
    negativePrompt: ai19_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // maid,
    imageUrl: ai20,
    aspectRatio: ai20_ar,
    NSFW: false,
    Premium: false,
    prompt: ai20_prompt,
    negativePrompt: ai20_negative_prompt,
    createPrompt: function () {
      console.log("creating prompt...");
    },
  },
  {
    // fancy tea,
    imageUrl: ai21,
    aspectRatio: ai21_ar,
    NSFW: false,
    Premium: false,
    prompt: ai21_prompt,
    negativePrompt: ai21_negative_prompt,
  },

  {
    // pink cool robot,
    imageUrl: ai22,
    aspectRatio: ai22_ar,
    NSFW: false,
    Premium: false,
    prompt: ai22_prompt,
    negativePrompt: ai22_negative_prompt,
  },
  {
    // swim suit
    imageUrl: ai23,
    aspectRatio: ai23_ar,
    NSFW: false,
    Premium: false,
    prompt: ai23_prompt,
    negativePrompt: ai23_negative_prompt,
  },
  {
    // witch
    imageUrl: ai24,
    aspectRatio: ai24_ar,
    NSFW: false,
    Premium: false,
    prompt: ai24_prompt,
    negativePrompt: ai24_negative_prompt,
  },
  {
    // modern girl in rain,
    imageUrl: ai25,
    aspectRatio: ai25_ar,
    NSFW: false,
    Premium: false,
    prompt: ai25_prompt,
    negativePrompt: ai25_negative_prompt,
  },
  {
    // young girl in the woods,
    imageUrl: ai26,
    aspectRatio: ai26_ar,
    NSFW: false,
    Premium: false,
    prompt: ai26_prompt,
    negativePrompt: ai26_negative_prompt,
  },
  {
    // closed eyes school girl,
    imageUrl: ai27,
    aspectRatio: ai27_ar,
    NSFW: false,
    Premium: false,
    prompt: ai27_prompt,
    negativePrompt: ai27_negative_prompt,
  },
  {
    // black outfit girl,
    imageUrl: ai28,
    aspectRatio: ai28_ar,
    NSFW: false,
    Premium: false,
    prompt: ai28_prompt,
    negativePrompt: ai28_negative_prompt,
  },

  {
    // pink girl kimono
    imageUrl: ai29,
    aspectRatio: ai29_ar,
    NSFW: false,
    Premium: false,
    prompt: ai29_prompt,
    negativePrompt: ai29_negative_prompt,
  },

  {
    // orange girl kimono,
    imageUrl: ai30,
    aspectRatio: ai30_ar,
    NSFW: false,
    Premium: false,
    prompt: ai30_prompt,
    negativePrompt: ai30_negative_prompt,
  },

  {
    // samurai bloody girl,
    imageUrl: ai31,
    aspectRatio: ai31_ar,
    NSFW: false,
    Premium: false,
    prompt: ai31_prompt,
    negativePrompt: ai31_negative_prompt,
  },

  {
    // astronaut girl
    imageUrl: ai32,
    aspectRatio: ai32_ar,
    NSFW: false,
    Premium: false,
    prompt: ai32_prompt,
    negativePrompt: ai32_negative_prompt,
  },
  {
    // fitness couple running
    imageUrl: ai33,
    aspectRatio: ai33_ar,
    NSFW: false,
    Premium: false,
    prompt: ai33_prompt,
    negativePrompt: ai33_negative_prompt,
  },
  {
    // couple about to kiss
    imageUrl: ai34,
    aspectRatio: ai34_ar,
    NSFW: false,
    Premium: false,
    prompt: ai34_prompt,
    negativePrompt: ai34_negative_prompt,
  },
  {
    // rainbow cheerleader
    imageUrl: ai35,
    aspectRatio: ai35_ar,
    NSFW: false,
    Premium: false,
    prompt: ai35_prompt,
    negativePrompt: ai35_negative_prompt,
  },
  {
    // karate girl
    imageUrl: ai36,
    aspectRatio: ai36_ar,
    NSFW: false,
    Premium: false,
    prompt: ai36_prompt,
    negativePrompt: ai36_negative_prompt,
  },
  {
    // knight boy
    imageUrl: ai37,
    aspectRatio: ai37_ar,
    NSFW: false,
    Premium: false,
    prompt: ai37_prompt,
    negativePrompt: ai37_negative_prompt,
  },
  {
    // pirate girl
    imageUrl: ai38,
    aspectRatio: ai38_ar,
    NSFW: false,
    Premium: false,
    prompt: ai38_prompt,
    negativePrompt: ai38_negative_prompt,
  },
  {
    // pirate boy
    imageUrl: ai39,
    aspectRatio: ai39_ar,
    NSFW: false,
    Premium: false,
    prompt: ai39_prompt,
    negativePrompt: ai39_negative_prompt,
  },
  {
    // military girl
    imageUrl: ai40,
    aspectRatio: ai40_ar,
    NSFW: false,
    Premium: false,
    prompt: ai40_prompt,
    negativePrompt: ai40_negative_prompt,
  },
  {
    // miliatry boy
    imageUrl: ai41,
    aspectRatio: ai41_ar,
    NSFW: false,
    Premium: false,
    prompt: ai41_prompt,
    negativePrompt: ai41_negative_prompt,
  },
  {
    // bikini girl
    imageUrl: ai42,
    aspectRatio: ai42_ar,
    NSFW: false,
    Premium: false,
    prompt: ai42_prompt,
    negativePrompt: ai42_negative_prompt,
  },
  {
    // swimming pool boy
    imageUrl: ai43,
    aspectRatio: ai43_ar,
    NSFW: false,
    Premium: false,
    prompt: ai43_prompt,
    negativePrompt: ai43_negative_prompt,
  },
  {
    // kawaii girl
    imageUrl: ai44,
    aspectRatio: ai44_ar,
    NSFW: false,
    Premium: false,
    prompt: ai44_prompt,
    negativePrompt: ai44_negative_prompt,
  },
  {
    // chibi
    imageUrl: ai45,
    aspectRatio: ai45_ar,
    NSFW: false,
    Premium: false,
    prompt: ai45_prompt,
    negativePrompt: ai45_negative_prompt,
  },
  {
    // bunny girl
    imageUrl: ai46,
    aspectRatio: ai46_ar,
    NSFW: false,
    Premium: false,
    prompt: ai46_prompt,
    negativePrompt: ai46_negative_prompt,
  },

  // {
  //   // black outfit girl,
  //   imageUrl: ai28,
  //   aspectRatio: ai28_ar,
  //   NSFW: false,
  //   Premium: false,
  //   prompt: ai28_prompt,
  //   negativePrompt: ai28_negative_prompt,
  // },
];

export const imageUrls = animeAiImages.map((img) => ({
  uri: img.imageUrl,
}));

// console.log(imageUrls);
