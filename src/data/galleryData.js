import imgSchool from '../assets/hinh_nu/received_1012025869561619.jpeg'
import imgGradNu from '../assets/hinh_nu/received_6927871720597107.jpeg'
import imgGradHung from '../assets/hinh_nu/received_264544952917418.jpeg'
import imgBobaSmile from '../assets/hinh_nu/received_1236636626542573.jpeg'
import imgPlayful from '../assets/hinh_nu/received_1085876415748782.jpeg'
import imgHighlands from '../assets/hinh_nu/received_1311443992800616.jpeg'
import imgSelfie from '../assets/hinh_nu/received_311458955120173.jpeg'
import imgFunny from '../assets/hinh_nu/received_164842431524574.jpeg'
import imgLasuTea from '../assets/hinh_nu/received_1179506033412038.jpeg'
import imgVideoCall from '../assets/hinh_nu/received_916866409194388.webp'
import videoClip1 from '../assets/hinh_nu/received_1928680484217537.mp4'
import videoClip2 from '../assets/hinh_nu/received_917285090082888.mp4'

export const galleryCategories = [
  { id: 'all', label: 'Tất cả', icon: 'auto_awesome' },
  { id: 'milestones', label: 'Cột mốc', icon: 'school' },
  { id: 'moments', label: 'Đời thường', icon: 'favorite' },
  { id: 'videos', label: 'Video Clips', icon: 'smart_display' },
]

export const galleryPhotos = [
  {
    id: 1,
    type: 'image',
    category: 'milestones',
    image: imgSchool,
    title: 'Tấm hình giữ lâu nhất hồi còn trẩu rồi',
    icon: 'school',
  },
  {
    id: 2,
    type: 'image',
    category: 'milestones',
    image: imgGradNu,
    title: 'Chúc mừng đã bạn nhá',
    icon: 'workspace_premium',
  },
  {
    id: 3,
    type: 'image',
    category: 'milestones',
    image: imgGradHung,
    title: 'Rồi cũng tới tui',
    icon: 'emoji_events',
  },
  {
    id: 4,
    type: 'image',
    category: 'moments',
    image: imgBobaSmile,
    title: 'Xinh thía',
    icon: 'local_cafe',
  },
  {
    id: 5,
    type: 'image',
    category: 'moments',
    image: imgPlayful,
    title: 'I love this energy',
    icon: 'sentiment_very_satisfied',
  },
  {
    id: 6,
    type: 'image',
    category: 'moments',
    image: imgHighlands,
    title: '...',
    icon: 'bakery_dining',
  },
  {
    id: 7,
    type: 'image',
    category: 'moments',
    image: imgSelfie,
    title: 'Hai đứa dậy thì thành công phết =))',
    icon: 'diversity_1',
  },
  {
    id: 8,
    type: 'image',
    category: 'moments',
    image: imgFunny,
    title: 'Tui thua',
    icon: 'mood',
  },
  {
    id: 9,
    type: 'image',
    category: 'moments',
    image: imgLasuTea,
    title: 'Nhớ LASU',
    icon: 'emoji_food_beverage',
  },
  {
    id: 10,
    type: 'image',
    category: 'moments',
    image: imgVideoCall,
    title: 'Cuộc Gọi Đêm',
    icon: 'videocam',
  },
  {
    id: 11,
    type: 'video',
    category: 'videos',
    image: videoClip1,
    title: 'Coi bạn nói gì với tôi',
    icon: 'smart_display',
  },
  {
    id: 12,
    type: 'video',
    category: 'videos',
    image: videoClip2,
    title: 'Coi bạn nói gì với tôi v2',
    icon: 'play_circle',
  },
]
