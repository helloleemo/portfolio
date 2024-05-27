<!-- colors: {
          primary: '#325b76',
          secondary: '#4e7e9f',
          complementary: '#764d32',
          analogous: '#32766f',
          grey: '#78909C',
          lighterGrey: '#B0BEC5'
        } -->
<template>
  <!--  -->
  <!-- navbar -->
  <!--  -->
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img :src="getOtherSrc('logo.svg')" alt="" style="width: 20%"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="px-4 custom-hover nav-link text-white" @click="scrollToSection('work-section')"
            >New</a
          >
          <a
            class="px-4 custom-hover nav-link text-white"
            @click="scrollToSection('section-achievement')"
            >Achievement</a
          >
          <a
            class="px-4 custom-hover nav-link text-white"
            @click="scrollToSection('section-gallery')"
            >Gallery</a
          >
        </div>
      </div>
    </div>
  </nav>
  <!--  -->
  <!-- main -->
  <!--  -->

  <!-- bg -->
  <div class="position-relative px-0">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col>
          <v-parallax
            ><v-img
              class="bg-grey-lighten-1"
              height="250"
              src="https://picsum.photos/900/250"
              cover
            ></v-img>
          </v-parallax>
        </v-col>
      </v-row>
    </v-fade-transition>
  </div>

  <!-- info card -->
  <v-card
    class="infoCard p-3 mx-auto cursor-default"
    :title="cardTitle"
    :subtitle="cardSubtitle"
    :text="cardText"
    max-width="900"
    hover
  >
    <template v-slot:prepend>
      <v-avatar color="blue-darken-2" size="50">
        <v-img :src="getOtherSrc('img/profile-250x250.png')" alt="avatar"></v-img>
      </v-avatar>
    </template>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="scrollToSection('work-section')" class="custom-hover-btn">See Work</v-btn>
      <v-btn
        href="https://drive.google.com/file/d/1zmDyOIYZbJLMdjTDTlWCtbFXdnxyYfZD/view?usp=drive_link"
        target="_blank"
        class="custom-hover-btn"
        ><v-icon icon="mdi-download"> </v-icon>Download Resume</v-btn
      >
    </v-card-actions>
  </v-card>

  <!--  -->
  <!-- Work -->
  <!--  -->
  <div class="section" id="work-section">
    <h3 class="mx-auto text-center font-weight-bold text-h5 SectionTitle">
      <span>｜</span>New<span>｜</span>
    </h3>
    <v-fade-transition mode="out-in">
      <v-container class="container">
        <v-row class="mx-auto" no-gutters justify="center">
          <v-hover v-slot="{ isHovering, props }" v-for="item in features" :key="item.title">
            <v-col cols="12" v-bind="props">
              <div class="imgbox position-relative rounded border mb-5">
                <img :src="getGifSrc(item.imgUrl)" alt="" />
                <v-fade-transition>
                  <div v-if="isHovering">
                    <div class="bg-grey workHover"></div>
                    <v-card class="mx-auto my-8 workCard" elevation="16" max-width="500">
                      <v-card-item>
                        <v-card-title> {{ item.title }} </v-card-title>
                        <v-card-subtitle> {{ item.subtitle }} </v-card-subtitle>
                      </v-card-item>
                      <v-card-text>
                        <ul>
                          <li v-for="desc in item.description" :key="desc">
                            <v-icon
                              icon="mdi-checkbox-marked-circle-outline"
                              class="pe-2 ml-n5"
                            ></v-icon
                            >{{ desc }}
                          </li>
                        </ul>
                      </v-card-text>
                      <v-card-subtitle class="text-h6">
                        <v-icon icon="mdi-vuejs"></v-icon>
                        <v-icon icon="mdi-sass"></v-icon>
                        <v-icon icon="mdi-language-html5"></v-icon>
                        <v-icon icon="mdi-language-javascript"></v-icon>
                      </v-card-subtitle>
                      <v-card-actions
                        class="center-actions"
                        style="display: flex; justify-content: flex-end"
                      >
                        <v-btn :href="item.link2" target="_blank" class="custom-hover-btn"
                          ><v-icon icon="mdi-github"></v-icon>Github</v-btn
                        >
                        <v-btn :href="item.link" target="_blank" class="custom-hover-btn"
                          >View Web</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </div>
                </v-fade-transition>
              </div>
            </v-col>
          </v-hover>
        </v-row>
      </v-container>
    </v-fade-transition>
  </div>

  <!--  -->
  <!-- Tools -->
  <!--  -->

  <div class="section bg-grey-lighten-3">
    <div class="bg-grey-lighten-3">
      <h3 class="mx-auto text-center text-h5 font-weight-bold SectionTitle">
        <span>｜</span>Tools<span>｜</span>
      </h3>
      <v-container class="container">
        <v-row no-gutters justify="start">
          <v-col v-for="item in tools" :key="item" cols="12" sm="6" md="4" class="h-100">
            <!-- 綁定插槽v-slot和v-bind，整個都是hover要出現的 -->
            <v-hover v-slot="{ isHovering, props }">
              <v-card :href="item.toolUrl" target="_blank" v-bind="props" class="m-2">
                <v-img :src="getToolSrc(item.imgUrl)" height="250" cover>
                  <!-- hover出現的部分 -->
                  <v-expand-transition class="custom-bg" style="height: 100%">
                    <v-card-item
                      v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out v-card--reveal"
                    >
                      <v-card-subtitle class="text-white">{{ item.tag }}</v-card-subtitle>
                      <v-card-title class="text-white font-weight-bold">
                        <v-icon :icon="item.icon"></v-icon> {{ item.title }}
                      </v-card-title>
                      <v-card-subtitle class="text-white">{{ item.subtitle }}</v-card-subtitle>
                      <v-card-text class="p-0 text-white">{{ item.description }}</v-card-text>
                    </v-card-item>
                  </v-expand-transition>
                  <!-- hover出現的部分 -->
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

  <!--  -->
  <!-- Achievement -->
  <!--  -->

  <div class="section sectionAchievement" id="section-achievement">
    <h3 class="mx-auto text-center text-h5 font-weight-bold SectionTitle">
      <span>｜</span>Achievement<span>｜</span>
    </h3>
    <v-sheet class="mx-auto" max-width="1480">
      <v-slide-group v-model="selectedItem" class="pa-4" show-arrows>
        <v-slide-group-item
          v-for="item in achievement"
          :key="item.title"
          v-slot="{ selectedClass }"
        >
          <v-hover v-slot:default="{ isHovering, props }">
            <v-card
              :class="['ma-4', selectedClass]"
              color="grey-lighten-1"
              height="300"
              width="500"
              @click="selectItem(item)"
              v-bind="props"
            >
              <v-img :src="getAchievementSrc(item.imgUrl)" cover>
                <div class="d-flex fill-height align-center justify-center">
                  <v-scale-transition>
                    <div v-if="isHovering" class="white overlay d-flex flex-column justify-center">
                      <p class="p-0 small text-white">{{ item.tag }}</p>
                      <h3 class="text-h6 p-0 text-white">{{ item.title }}</h3>
                    </div>
                  </v-scale-transition>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-slide-group-item>
      </v-slide-group>
      <v-expand-transition>
        <v-sheet v-if="selectedItem" height="450" class="bg-grey-lighten-4 rounded">
          <div class="d-flex fill-height align-center flex-column justify-center">
            <p class="border-thin px-3 py-1 rounded-pill bg-grey">
              <v-icon icon="mdi-seal" class="pe-2"></v-icon>{{ selectedItem.tag }}
            </p>
            <h3 class="text-h5 font-weight-bold">{{ selectedItem.title }}</h3>
            <p class="subtitle">
              <v-icon icon="mdi-account" class="pe-2 text-grey"></v-icon>{{ selectedItem.subtitle }}
            </p>
            <p class="text-center w-75">{{ selectedItem.description }}</p>
            <v-btn
              v-if="selectedItem.link !== ''"
              :href="selectedItem.link"
              target="_blank"
              variant="outlined"
              class="custom-hover-btn"
              >view more</v-btn
            >
          </div>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </div>

  <!--  -->
  <!-- Gallery -->
  <!--  -->
  <hr class="mt-5" />
  <h3 class="mx-auto text-center text-h5 font-weight-bold SectionTitle" id="section-gallery">
    <span>｜</span>Gallery<span>｜</span>
  </h3>
  <v-container class="container mx-auto imgpadding">
    <!-- tag -->
    <div class="d-flex justify-center ga-2">
      <div v-for="tag in tagItems" :key="tag.title">
        <v-chip
          @click="sortItems(tag.title)"
          :class="{ 'selected-tag': tag.title === tagSelected }"
        >
          <v-icon :icon="tag.icon" class="pr-2"></v-icon> {{ tag.title }}
        </v-chip>
      </div>
    </div>
    <!-- img -->
    <v-row>
      <v-col cols="12" md="4" sm="12" xs="12" v-for="img in filteredGallery" :key="img.title">
        <div @click="showSingle(img)">
          <button class="imgbox rounded">
            <div class="imgbox imgboxGallery">
              <div class="hoverGallery text-start p-2">
                <div class="textGallery px-3">
                  <chips class="text-subtitle-1 text-white">{{ img.category }}</chips>
                  <h4 class="text-h5 text-white font-weight-bolder">{{ img.title }}</h4>
                  <p class="text-subtitle-1 text-white">{{ img.subtitle }}</p>
                  <p class="text-body-2 text-white">{{ img.description }}</p>
                </div>
              </div>
              <img :src="getImageSrc(img.imgUrl)" alt="" />
            </div>
          </button>
        </div>
        <div>
          <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="imgsRef"
            @hide="onHide"
          ></vue-easy-lightbox>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- footer -->
  <footer class="bg-primary py-10 d-flex justify-center">
    <v-icon icon="mdi-email-check-outline" class="pr-5"></v-icon> leemo.tseng@gmail.com
  </footer>
</template>

<script>
export default {
  data() {
    return {
      visibleRef: false,
      indexRef: 0,
      imgsRef: [],
      gallery: [
        {
          id: '01',
          title: '梅好薑來',
          imgUrl: '01-薑薑',
          subtitle: '企業識別系統',
          description: '來自泰雅族部落，新竹梅花村的農產品。',
          category: 'Graphics'
        },
        {
          id: '02',
          title: 'Linkoo',
          imgUrl: '02-linkoo',
          subtitle: '企業識別系統',
          description:
            'Linkoo企業的理念是將Link和all結合,連結所有東西,並打造無限的可能性。我們的目標是成為全球領先的貿易提供商,為各行業帶來更好的串連體驗和效率。',
          category: 'Graphics'
        },
        {
          id: '08',

          title: 'Grababe',
          imgUrl: '08-奶瓶抓握器',
          subtitle: '奶瓶抓握器設計',
          description:
            '透過市場調查，我們發現現有的嬰兒用品往往忽略了握把設計對於嬰兒早期發展的重要性，特別是在手部協調與力量訓練方面。因此，我們提出了一個結合認知發展與功能性的奶瓶抓握器。',
          category: 'Products'
        },
        {
          id: '03',
          title: '醫療教材設計',
          imgUrl: '03-乳房攝影衛教',
          subtitle: '資訊圖表設計',
          description: '為醫療院所設計相關的衛教資訊教材，讓醫師在向病患解釋時能夠更效率。',
          category: 'Graphics'
        },
        {
          id: '04',
          title: '課本設計',
          imgUrl: '04-南一課本',
          subtitle: '封面設計',
          description: '為國中生設計的古文選讀。',
          category: 'Graphics'
        },
        {
          id: '05',
          title: '你喜歡吃糖果嗎',
          imgUrl: '05-童書',
          subtitle: '童書插畫',
          description: '為學齡兒童設計的童書，主旨在於藉由「吃糖果」這件事情進行自我覺察。',
          category: 'Graphics'
        },
        {
          id: '06',
          title: '魚',
          imgUrl: '06-魚啦',
          subtitle: '插畫作品',
          description: '',
          category: 'Graphics'
        },
        {
          id: '07',

          title: '悠食煮廚',
          imgUrl: '07-SAKURA',
          subtitle: '櫻花廚具設計',
          description:
            '悠食煮廚的智慧互動介面能為你增添家人互相照應的關係，透過科技創造出更人性化、未來化的廚房。 ',
          category: 'Products'
        },
        {
          id: '09',

          title: '充電系統專案',
          role: '專案管理｜使用者體驗研究',

          imgUrl: '09-充電系統專案',
          subtitle: '充電系統專案',
          description: '為急需用電的工作者提供方便充電的服務。',
          category: 'Products'
        },
        {
          id: '10',

          title: '智慧健康促進系統',
          imgUrl: '10-HPSS-logo',
          subtitle: 'Logo優化',
          description: '企業視覺系統優化及制訂相關規則。',
          category: 'Graphics'
        },
        {
          id: '11',

          title: '智慧健康好夥伴',
          imgUrl: '10-HPSS-UX',
          subtitle: '醫療器材設計專案',
          description:
            '期盼透過零接觸的復健訓練服務，透過遠距醫療與數位醫療形式，提供復健者於居家進行高強度復健訓練，同時也減少醫院醫師的負擔，減少患者頻繁出入醫療院所的次數，也透過大數據分析協助醫師判斷，達到一個新的醫療模式。 ',
          category: 'Products'
        },
        {
          id: '12',

          title: '疫國戀',
          imgUrl: '13-遊戲',
          subtitle: '遊戲規劃及設計',
          description:
            '本遊戲為一款對抗病毒的塔防遊戲。主角需要經過重重難關，利用酒精、口罩、保健食品等，將病毒消滅。途中會經過台南、機場、國外三個關卡。主角是否能夠遠渡重洋抵達目的地呢？',
          category: 'Products'
        },
        {
          id: '13',

          title: '梅好薑來',
          imgUrl: '12-梅好將來',
          subtitle: '視覺系統規劃及設計',
          description: '來自泰雅族部落，新竹梅花村的農產品。',
          category: 'Graphics'
        },
        {
          id: '14',

          title: '和頤麻醉團隊',
          imgUrl: '11-和頤麻醉',
          subtitle: '視覺系統規劃及設計',
          description:
            '希望打造以「麻醉安全」為首要的麻醉環境，並提倡正確的麻醉觀念，堅持高度的醫療專業，所有手術不會讓麻醉護理師單獨作業，一律是麻醉專科醫師執行，守護每一位客人更小心、更安心的麻醉安全。',
          category: 'Graphics'
        },
        {
          id: '15',

          title: '寶島探險',
          imgUrl: '10-HPSS',
          subtitle: '使用者體驗研究',
          description:
            '高齡者在使用該版本的介面時，是否可以順利使用各項介面所提供的功能，以及是否能順利取得其在使用時所需要的資訊',
          category: 'Products'
        }
      ],

      tagSelected: 'All',
      tagItems: [
        {
          title: 'All',
          icon: 'mdi-checkbox-marked-circle-outline'
        },
        {
          title: 'Graphics',
          icon: 'mdi-draw'
        },
        {
          title: 'Products',
          icon: 'mdi-cube-outline'
        }
      ],

      selectedItem: null,
      cardTitle: `LeeMo`,
      cardSubtitle: `前端設計`,
      cardText: `目前專注於前端設計專案與技術，進行使用者體驗研究、介面設計與前端程式撰寫。曾擔任平面設計、產品設計、產品規劃和專案管理，並且同時自營個人工作室；在職期間負責專案設計、企劃執行、管理與廠商溝通印製流程及跨部門協調事宜。
      `,
      cardWork: [
        {
          title: '藝椅',
          content: '測試測試'
        },
        {
          title: '藝椅2',
          content: '測試測試'
        },
        {
          title: '藝椅3',
          content: '測試測試'
        },
        {
          title: '藝椅4',
          content: '測試測試'
        }
      ],
      features: [
        {
          title: '珍奇椅',
          subtitle: 'subtitle',
          description: [
            '網站類型｜購物車網站',
            '使用框架｜Vue3 optionAPI',
            '套件｜Bootstrap5、Axios、vee-validate、Mitt'
          ],
          other: 'a',
          imgUrl: 'work1',
          link: 'https://helloleemo.github.io/shoppingweb/#/user/view',
          link2: 'https://github.com/helloleemo/shoppingweb'
        }
        // '../assets/img/work1.gif'
        // {
        //   title: '飲料訂單系統',
        //   subtitle: 'subtitle',

        //   description: [
        //     '網站類型｜購物車網站',
        //     '使用技術｜Vue3 optionAPI',
        //     '套件｜Bootstrap5、Axios、vee-validate、Mitt'
        //   ],
        //   other: 'c',
        //   imgUrl: 'work1'
        // }
      ],
      tools: [
        {
          title: '番茄鐘',
          subtitle: 'Domotoro timer',
          icon: 'mdi-timer-outline',
          description: '可設定專注、休息時間，根據不同時間變換不同背景。',
          imgUrl: 'work-pomodoro',
          toolUrl: 'https://helloleemo.github.io/work-vueTomato.html'
        },
        // {
        //   title: '景點查找系統',
        //   subtitle: 'Abstract search',
        //   icon: 'mdi-map-search-outline',
        //   description: '以Axios套件串接政府資料，可搜尋相關景點。',
        //   imgUrl: 'https://picsum.photos/600/202',
        //   toolUrl: 'toolUrl'
        // },
        {
          title: '待辦清單',
          subtitle: 'To do list',

          icon: 'mdi-sticker-check-outline',
          description: '新增反序清單、移除待辦、標記優先順序。',
          imgUrl: 'work-todolist',
          toolUrl: 'https://helloleemo.github.io/portfolio/#/view/todolist'
        },
        {
          title: '攝影作品展示網站',
          subtitle: 'Display photography work',
          icon: 'mdi-sticker-check-outline',
          description: '用Ajax方式取得圖片與相關文字。',
          imgUrl: 'work-api',
          toolUrl: 'https://helloleemo.github.io/work-api.html'
        }
      ],
      achievement: [
        {
          tag: '第18屆 育秀盃-工業設計類 金獎',
          title: '智慧健康促進系統',
          subtitle: '使用者體驗研究｜系統介面優化｜團隊合作',
          description:
            '期盼透過零接觸的復健訓練服務，透過遠距醫療與數位醫療形式，提供復健者於居家進行高強度復健訓練，同時也減少醫院醫師的負擔，減少患者頻繁出入醫療院所的次數，同時也透過大數據分析協助醫師判斷，達到一個新的醫療模式。 ',
          imgUrl: 'hpss',
          link: 'https://helloleemo.github.io/work-hpss.html'
        },
        {
          tag: '2021 SAKURA 金櫻獎 佳作',
          title: '悠食煮廚',
          subtitle: '產品設計',
          description:
            '科技能解決時間的問題，但同時卻缺乏溫度及互動的連結，因此智能廚房不但能輕鬆煮食及快速清潔，甚至也能計算家人的用餐份量。然而現代人生活忙碌，對於廚房零基礎的人來說，要能快速煮出一道料理，是件不容易的事情。不過沒關係，悠食煮廚可以透過智能的食譜跟輔助，幫助你完成一桌料理，讓零基礎的你也能成為米其林大廚。悠食煮廚的智慧互動介面能為你增添家人互相照應的關係，透過科技創造出更人性化、未來化的廚房。 ',
          imgUrl: '悠食煮廚',
          link: 'https://helloleemo.github.io/work-sakura.html'
        },
        {
          tag: '2021 史丹佛長壽中心設計競賽 亞洲入圍',
          title: 'IHPSS - 三方共造醫療系統',
          subtitle: '產品設計｜使用者經驗研究',
          description:
            '智遊科技服務公司開發的aiFree-智慧健康好夥伴，主要提供於高齡健促者運動訓練使用。與感測器與護膝搭配使用，其介面內容主要提供使用者不同的訓練方式，透過運動教練的引導，促進使用者做出正確的動作。',
          imgUrl: '史丹佛入圍照片',
          link: 'https://helloleemo.github.io/work-hpss.html'
        },
        {
          tag: '2022 KD家具設計 佳作',
          title: 'UNI ONE 由你玩',
          subtitle: '產品設計',
          description:
            'UNI-ONE，讓收納再也不是一件頭痛的事，只需像是積木般拼湊出需要的功能櫃子，透過UNI-ONE模組化、客製化、彈性化的設計，你能夠想像的變化，甚至還未想到的可能性，UNI-ONE都能夠幫你實現——多變的生活空間，UNI-ONE，由你來定義！適合租屋族、多少空間就使用多少組件，擁有最大的空間和最剛好的家具！',
          imgUrl: 'Kd家具',
          link: 'https://helloleemo.github.io/work-kdfurniture.html'
        },
        {
          tag: '2023 發表於 IEEE ECBIOS',
          title: '功能性構音障礙研究',
          subtitle: '使用者研究｜產品設計',
          description:
            '本系統設計給4-6歲有構音異常的兒童，將治療介入過程中的圖卡以APP形式呈現，並結合紀錄系統讓治療師能夠追蹤及安排療程進度。前期研究結合腦波儀測試圖卡類型及兒童專注力的相關性，中期與治療師合作圖形設計。每個圖形配合專注力圖像以及聲母及韻母練習，讓兒童能夠全面進行構音訓練。',
          imgUrl: 'work-articulation00',
          link: 'https://helloleemo.github.io/work-articulation.html'
        },
        {
          tag: '2022 Logitech - Design for Gaming - Honorable mention',
          title: 'Ready to Shine',
          subtitle: 'Project management | Product Design',
          description:
            'Generation Z, are highly accepting of new things, and get used to rely on using virtual carriers,such as ommunities, taking courses, and playing games. They born in the age of  information explosion ,usually get information from the Internet, but it is impossible to tell whether the information is true or not. The development of social software has also profoundly affected the social patterns of Generation Z. Even if they enjoy advanced and perfect technological equipment,  they still face different difficulties, such as self-identity, cyberbullying, mental health, etc. which compared with the perfect image on the Internet, also may cause self-lost in their life. Some studies even call Generation Z: the loneliest generation.',
          imgUrl: 'gaming',
          link: 'https://drive.google.com/file/d/1CJhixRJI3HYpRss_nmGFSFc-olIZgWFH/view?usp=sharing'
        },
        {
          tag: '2021 成功大學 學院研究競賽 第二名 ',
          title: '疫起光臨',
          subtitle: '產品設計 | 提案規劃',
          description:
            '疫情時由於外在的行動範圍遭到限制,因此我們轉而向內,從自求心靈的穩定衡。「正念」已被研究證實能有效解心理壓力，緩解心理疾病的症狀。我們設計了正念座，藉由內部獨立的空間與聲音、光線的引導讓人們進入正念的狀態，在柔和光線的環繞下，淨化被焦慮淹沒的思緒，是我們對抗疫情所帶來心理問題的第一步。',
          imgUrl: '疫起光臨',
          link: 'https://drive.google.com/file/d/12B1aGuAsM950sD2lWuGggfZhvCUKycgA/view?usp=sharing'
        },
        {
          tag: '2021 奇想設計大賽 創新科技組 佳作',
          title: '智遊科技一智慧健促服務系統',
          subtitle: '使用者體驗研究 | 產品設計',
          description:
            '智遊科技服務公司開發的aiFree-智慧健康好夥伴，主要提供於高齡健促者運動訓練使用。與感測器與護膝搭配使用，其介面內容主要提供使用者不同的訓練方式，透過運動教練的引導，促進使用者做出正確的動作。',
          imgUrl: 'work-hpss01',
          link: ''
        }
      ]
    }
  },
  computed: {
    filteredGallery() {
      if (this.tagSelected === 'All') {
        return this.gallery
      }
      return this.gallery.filter((img) => img.category === this.tagSelected)
    }
  },
  methods: {
    getImageSrc(title) {
      try {
        return new URL(`../assets/gallery/${title}.png`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${title}:`, error)
        return 'error'
      }
    },
    getGifSrc(imgUrl) {
      try {
        return new URL(`../assets/img/${imgUrl}.gif`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${imgUrl}:`, error)
        return 'error'
      }
    },
    getToolSrc(imgUrl) {
      try {
        return new URL(`../assets/tools/${imgUrl}.png`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${imgUrl}:`, error)
        return 'error'
      }
    },
    getAchievementSrc(imgUrl) {
      try {
        return new URL(`../assets/achievement/${imgUrl}.png`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${imgUrl}:`, error)
        return 'error'
      }
    },
    getOtherSrc(imgUrl) {
      try {
        return new URL(`../assets/${imgUrl}`, import.meta.url).href
      } catch (error) {
        console.error(`Image not found for ${imgUrl}:`, error)
        return 'error'
      }
    },
    sortItems(tag) {
      this.tagSelected = tag
      // console.log(this.tagSelected)
    },
    filterItems() {
      return this.sortCard
    },

    onShow() {
      this.visibleRef = true
    },
    showSingle(img) {
      let imgUrl = new URL(`../assets/gallery/${img.imgUrl}.png`, import.meta.url).href
      // console.log(imgUrl)
      this.imgsRef = [imgUrl]
      this.onShow()
    },

    onHide() {
      this.visibleRef = false
    },
    getToTodolist() {
      this.$router.push('/portfolio/todolist')
    },
    selectItem(item) {
      this.selectedItem = item
    },
    scrollToSection(id) {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #325b76;
$secondary: #4e7e9f;
$complementary: #764d32;
$analogous: #32766f;
$grey: #78909c;
$lighterGrey: #b0bec5;

/* ----------- */
/*   Section  */
/* ----------- */

.navbar {
  a {
    cursor: pointer;
  }
}

.section {
  padding: 100px 0px;
}

.SectionTitle {
  padding: 50px 0px;
}

/* ----------- */
/*     main    */
/* ----------- */
.imgbox {
  object-fit: cover;
  height: 100%;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
}
.custom-bg {
  background-color: $primary;
}
.custom-hover {
  transition: all 0.2s ease;
  &:hover {
    font-weight: 800;
  }
}
.custom-hover-btn {
  &:hover {
    background-color: $primary;
    color: white;
  }
}

.infoCard {
  margin-top: -100px;
}

/* ----------- */
/*     work    */
/* ----------- */
.workHover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background-color: rgba(50, 91, 118, 0.1);
  // background: $primary;
  display: flex;
  align-items: center;
  justify-content: center;
}
li {
  list-style: none;
}
.workCard {
  // opacity: 1 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
}
.imgbox {
  height: 400px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

/* ----------- */
/* achievement */
/* ----------- */

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary; /* 半透明遮罩 */
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ----------- */
/* Tools */
/* ----------- */

.v-card--reveal {
  align-items: start;
  bottom: 0;
  justify-content: start;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
/* ----------- */
/* Gallery */
/* ----------- */

.selected-tag {
  background-color: #325b76;
  color: white;
}

.imgboxGallery {
  position: relative;
  transition: all 0.2s ease;
  &:hover .hoverGallery {
    opacity: 0.8;
  }
}

.hoverGallery {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary; /* 半透明遮罩 */
  opacity: 0;
  transition: all 0.2s ease;
}
.textGallery {
  position: relative;
  top: 30%;
}
.imgpadding {
  margin-bottom: 300px;
}
</style>
