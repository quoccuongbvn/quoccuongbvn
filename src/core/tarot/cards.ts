import { TarotCard } from "./machine";

export const MAJOR_ARCANA: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    nameVN: "Chàng Khờ",
    image: "https://upload.wikimedia.org/wikipedia/en/9/90/RWS_Tarot_00_Fool.jpg",
    keywords: ["Khởi đầu", "Tự do", "Ngây thơ"],
    desc: "Một hành trình mới đang chờ đợi. Hãy bước đi với trái tim rộng mở và không sợ hãi.",
  },
  {
    id: 1,
    name: "The Magician",
    nameVN: "Ảo Thuật Gia",
    image: "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
    keywords: ["Sáng tạo", "Kỹ năng", "Ý chí"],
    desc: "Bạn có đủ mọi công cụ cần thiết để thành công. Hãy tập trung ý chí để biến ước mơ thành hiện thực.",
  },
  {
    id: 2,
    name: "The High Priestess",
    nameVN: "Nữ Tu Tối Cao",
    image: "https://upload.wikimedia.org/wikipedia/en/8/88/RWS_Tarot_02_High_Priestess.jpg",
    keywords: ["Trực giác", "Bí ẩn", "Tiềm thức"],
    desc: "Hãy lắng nghe tiếng nói bên trong. Câu trả lời không nằm ở bên ngoài mà ở ngay trong trực giác của bạn.",
  },
  {
    id: 3,
    name: "The Empress",
    nameVN: "Nữ Hoàng",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d2/RWS_Tarot_03_Empress.jpg",
    keywords: ["Trù phú", "Thiên nhiên", "Nuôi dưỡng"],
    desc: "Một thời kỳ của sự sinh sôi nảy nở và sáng tạo. Hãy tận hưởng vẻ đẹp của cuộc sống.",
  },
  {
    id: 4,
    name: "The Emperor",
    nameVN: "Hoàng Đế",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/RWS_Tarot_04_Emperor.jpg",
    keywords: ["Quyền lực", "Kỷ luật", "Ổn định"],
    desc: "Cần có trật tự và kỷ luật. Hãy đứng vững và bảo vệ những gì bạn đã xây dựng.",
  },
  {
    id: 5,
    name: "The Hierophant",
    nameVN: "Giáo Hoàng",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8d/RWS_Tarot_05_Hierophant.jpg",
    keywords: ["Truyền thống", "Niềm tin", "Học hỏi"],
    desc: "Tìm kiếm lời khuyên từ những giá trị truyền thống hoặc một người thầy tinh thần.",
  },
  {
    id: 6,
    name: "The Lovers",
    nameVN: "Tình Nhân",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
    keywords: ["Tình yêu", "Lựa chọn", "Hòa hợp"],
    desc: "Một mối quan hệ quan trọng hoặc một quyết định lớn về giá trị sống đang đến gần.",
  },
  {
    id: 7,
    name: "The Chariot",
    nameVN: "Cỗ Xe",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
    keywords: ["Chiến thắng", "Ý chí", "Hành động"],
    desc: "Tiến về phía trước với quyết tâm cao độ. Chiến thắng sẽ đến nếu bạn giữ vững tay lái.",
  },
  {
    id: 8,
    name: "Strength",
    nameVN: "Sức Mạnh",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
    keywords: ["Can đảm", "Kiên nhẫn", "Trắc ẩn"],
    desc: "Sức mạnh thực sự đến từ sự dịu dàng và kiên nhẫn, không phải từ bạo lực.",
  },
  {
    id: 9,
    name: "The Hermit",
    nameVN: "Ẩn Sĩ",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4d/RWS_Tarot_09_Hermit.jpg",
    keywords: ["Cô độc", "Suy ngẫm", "Soi đường"],
    desc: "Đã đến lúc tạm lánh xa thế giới ồn ào để tìm lại ánh sáng chân lý bên trong bạn.",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameVN: "Bánh Xe Số Phận",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    keywords: ["Thay đổi", "May mắn", "Chu kỳ"],
    desc: "Mọi thứ đều xoay vòng. Hãy chấp nhận sự thay đổi như một phần tất yếu của cuộc sống.",
  },
  {
    id: 13,
    name: "Death",
    nameVN: "Cái Chết",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RWS_Tarot_13_Death.jpg",
    keywords: ["Kết thúc", "Tái sinh", "Buông bỏ"],
    desc: "Một cánh cửa đóng lại để cánh cửa khác mở ra. Đừng sợ hãi sự thay đổi triệt để.",
  },
  {
    id: 19,
    name: "The Sun",
    nameVN: "Mặt Trời",
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/RWS_Tarot_19_Sun.jpg",
    keywords: ["Niềm vui", "Thành công", "Tích cực"],
    desc: "Ánh sáng rực rỡ của thành công và hạnh phúc đang chiếu rọi. Mọi thứ sẽ tốt đẹp.",
  },
];

export function drawRandomCard(): TarotCard {
  const index = Math.floor(Math.random() * MAJOR_ARCANA.length);
  return MAJOR_ARCANA[index];
}
