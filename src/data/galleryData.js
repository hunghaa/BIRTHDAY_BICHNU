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
    title: 'Thời Học Trò • Khăn Quàng Đỏ',
    icon: 'school',
    tag: 'Tuổi Thơ Ngây Ngô',
    wish: 'Ngày ấy hai đứa còn đeo khăn quàng đỏ ngây ngô dưới mái trường, giờ cô bé Cẩm Nguyệt năm nào đã trở thành cô giáo tiếng Anh 25 tuổi thật xinh đẹp và tài giỏi!',
  },
  {
    id: 2,
    type: 'image',
    category: 'milestones',
    image: imgGradNu,
    title: 'Tốt Nghiệp Tôn Đức Thắng • TDTU',
    icon: 'workspace_premium',
    tag: 'Cử Nhân Bích Nụ',
    wish: 'Khoảnh khắc rạng rỡ của Bích Nụ trong ngày nhận bằng tốt nghiệp TDTU, đón nhận những đóa hoa tươi thắm cùng tình cảm chúc mừng từ mọi người.',
  },
  {
    id: 3,
    type: 'image',
    category: 'milestones',
    image: imgGradHung,
    title: 'Tốt Nghiệp UIT • Đồng Hành Cùng Hùng',
    icon: 'emoji_events',
    tag: 'Tri Kỷ Đồng Hành',
    wish: 'Ngày Minh Hùng tốt nghiệp UIT, Bích Nụ xách hoa hướng dương tới chúc mừng và cùng nâng tấm bằng khen đầy tự hào, chia ngọt sẻ bùi cùng nhau!',
  },
  {
    id: 4,
    type: 'image',
    category: 'moments',
    image: imgBobaSmile,
    title: 'Trà Sữa & Nụ Cười Tỏa Nắng',
    icon: 'local_cafe',
    tag: 'Ngọt Ngào & Tươi Tắn',
    wish: 'Uống trà sữa thì ngọt ngào, nhưng nụ cười tươi tắn của cô giáo Bích Nụ lúc nào cũng làm bừng sáng cả không gian.',
  },
  {
    id: 5,
    type: 'image',
    category: 'moments',
    image: imgPlayful,
    title: 'Alo Nghe Nè • Năng Lượng Rực Rỡ',
    icon: 'sentiment_very_satisfied',
    tag: 'Nhí Nhảnh & Yêu Đời',
    wish: 'Luôn tự tin, nhí nhảnh và tràn đầy năng lượng tích cực! Chúc Bích Nụ tuổi 25 lúc nào cũng cười thả ga và yêu đời như vầy nha.',
  },
  {
    id: 6,
    type: 'image',
    category: 'moments',
    image: imgHighlands,
    title: 'Highlands Coffee & Bánh Chewy',
    icon: 'bakery_dining',
    tag: 'Cà Phê & Bánh Ngọt',
    wish: 'Những buổi tối cà phê chuyện trò, nhâm nhi bánh su Chewy Junior thơm lừng và nói đủ thứ chuyện trên đời.',
  },
  {
    id: 7,
    type: 'image',
    category: 'moments',
    image: imgSelfie,
    title: 'Đôi Bạn Cùng Tiến • Kính Tri Thức',
    icon: 'diversity_1',
    tag: 'Đôi Bạn Tri Thức',
    wish: 'Hai đứa đeo kính tri thức xúng xính đồ đẹp. Không cần phải gặp nhau quá nhiều hay nói chuyện suốt, nhưng hễ gặp là rôm rả như chưa từng xa cách!',
  },
  {
    id: 8,
    type: 'image',
    category: 'moments',
    image: imgFunny,
    title: 'Khoảnh Khắc Lầy Lội • Cười Nghiêng Ngả',
    icon: 'mood',
    tag: 'Troll Nhau Siêu Lầy',
    wish: 'Chơi với nhau lâu năm là phải có những pha troll nhau lầy lội cười nghiêng ngả như vầy mới đúng chất bạn thân lâu năm =))',
  },
  {
    id: 9,
    type: 'image',
    category: 'moments',
    image: imgLasuTea,
    title: 'LASU Oolong • Góc Trà Sữa Quen Thuộc',
    icon: 'emoji_food_beverage',
    tag: 'Hương Vị Kỷ Niệm',
    wish: 'Những ly trà sữa Oolong LASU quen thuộc, gắn liền với biết bao câu chuyện vui buồn từ thời sinh viên đến khi đi làm.',
  },
  {
    id: 10,
    type: 'image',
    category: 'moments',
    image: imgVideoCall,
    title: 'Cuộc Gọi Đêm • Nụ Cười Ấm Áp',
    icon: 'videocam',
    tag: 'Cuộc Gọi Đêm',
    wish: 'Dù sau một ngày dài mệt mỏi, khi bật màn hình lên vẫn luôn là nụ cười ấm áp, gần gũi và dễ thương quen thuộc của Bích Nụ.',
  },
  {
    id: 11,
    type: 'video',
    category: 'videos',
    image: videoClip1,
    title: 'Thước Phim Rực Rỡ • Tuổi 25',
    icon: 'smart_display',
    tag: 'Video Clip Sống Động',
    wish: 'Một thước phim ngắn ghi lại thần thái đáng yêu, tự nhiên và tràn ngập sức sống của cô giáo Bích Nụ ngoài đời thực! ✨',
  },
  {
    id: 12,
    type: 'video',
    category: 'videos',
    image: videoClip2,
    title: 'Chuyển Động Kỷ Niệm • Tuổi Trẻ',
    icon: 'play_circle',
    tag: 'Khoảnh Khắc Đáng Yêu',
    wish: 'Lưu giữ những chuyển động thanh xuân rạng rỡ tuổi 25 — chúc Bích Nụ luôn vui vẻ, nhẹ đầu và làm gì cũng suôn sẻ!',
  },
]
