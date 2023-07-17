import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

export default function AgeGroupSvg() {
  return (
    <Svg width="25" height="20" viewBox="0 0 25 20" fill="none">
      <Path
        d="M5.5437 10.8628C5.75026 10.5232 5.86056 10.1344 5.86056 9.7304C5.86056 8.50449 4.83962 7.50714 3.58471 7.50714C2.32979 7.50714 1.30885 8.50449 1.30885 9.7304C1.30885 10.1384 1.42105 10.5303 1.63108 10.8719C0.619628 11.2777 0.0700684 12.0136 0.0700684 12.9823V13.5471C0.0700684 13.7394 0.229708 13.8954 0.426589 13.8954C0.623471 13.8954 0.783111 13.7394 0.783111 13.5471V12.9823C0.783111 12.1878 1.29704 11.6495 2.31058 11.3823C2.43298 11.35 2.52862 11.2566 2.56178 11.1371C2.59494 11.0176 2.56064 10.8898 2.47164 10.8016C2.18168 10.5141 2.02199 10.1337 2.02199 9.7304C2.02199 8.88859 2.72308 8.20371 3.5848 8.20371C4.44653 8.20371 5.14761 8.88859 5.14761 9.7304C5.14761 10.1311 4.98959 10.5098 4.70257 10.7968C4.61395 10.8854 4.58021 11.0134 4.61395 11.1328C4.64768 11.2523 4.74389 11.3452 4.86648 11.3769C5.89358 11.642 6.41434 12.1822 6.41434 12.9823V15.479C6.41434 15.7014 6.22913 15.8823 6.00146 15.8823C5.77379 15.8823 5.58858 15.7014 5.58858 15.479V14.2436V13.2242C5.58858 13.0319 5.42894 12.8759 5.23206 12.8759C5.03518 12.8759 4.87554 13.0319 4.87554 13.2242V13.8953H2.32187V13.2242C2.32187 13.0319 2.16223 12.8759 1.96535 12.8759C1.76847 12.8759 1.60883 13.0319 1.60883 13.2242V14.2436V15.479C1.60883 15.7014 1.42362 15.8823 1.19594 15.8823C0.968274 15.8823 0.783063 15.7014 0.783063 15.479V14.9401C0.783063 14.7478 0.623423 14.5919 0.426542 14.5919C0.229661 14.5919 0.0700684 14.7479 0.0700684 14.9402V15.479C0.0700684 16.0855 0.575128 16.5789 1.19594 16.5789C1.34164 16.5789 1.48092 16.5517 1.60883 16.5023V18.8539C1.60883 19.4858 2.13514 20 2.782 20C3.09915 20 3.3873 19.8764 3.5987 19.6759C3.81005 19.8764 4.09821 20 4.41536 20C5.06227 20 5.58853 19.4858 5.58853 18.8539V16.5023C5.71643 16.5517 5.85572 16.5789 6.00141 16.5789C6.62223 16.5789 7.12729 16.0855 7.12729 15.479V12.9823C7.12734 12.0059 6.56976 11.2667 5.5437 10.8628ZM4.87558 14.5919V15.1331C4.31526 15.6967 3.79824 15.9515 3.59875 15.9515C3.39921 15.9515 2.88215 15.6966 2.32192 15.1331V14.5919H4.87558ZM2.782 19.3035C2.52829 19.3035 2.32182 19.1019 2.32182 18.854V16.071C2.59243 16.2825 2.91849 16.492 3.24218 16.5902V18.854C3.24223 19.1018 3.03576 19.3035 2.782 19.3035ZM4.41536 19.3035C4.16164 19.3035 3.95518 19.1019 3.95518 18.854V16.5902C4.27887 16.492 4.60493 16.2825 4.87554 16.071V18.854C4.87558 19.1018 4.66912 19.3035 4.41536 19.3035Z"
        fill="#594E3C"
      />
      <Path
        d="M13.8931 7.03282C14.1326 6.65455 14.2608 6.21793 14.2608 5.76347C14.2608 4.42906 13.1495 3.34338 11.7835 3.34338C10.4174 3.34338 9.30613 4.42902 9.30613 5.76347C9.30613 6.22215 9.43645 6.6622 9.67977 7.0425C8.5511 7.48181 7.93726 8.28974 7.93726 9.35674V13.7872C7.93726 14.4372 8.47856 14.966 9.14392 14.966C9.31969 14.966 9.48683 14.9291 9.6376 14.8628V18.7702C9.6376 19.4483 10.2023 20 10.8965 20C11.25 20 11.57 19.8569 11.7989 19.6268C12.0278 19.8569 12.3478 20 12.7013 20C13.3955 20 13.9602 19.4483 13.9602 18.7702V17.5768C13.9602 17.3845 13.8006 17.2285 13.6037 17.2285C13.4068 17.2285 13.2472 17.3844 13.2472 17.5768V18.7702C13.2472 19.0642 13.0023 19.3034 12.7013 19.3034C12.4002 19.3034 12.1554 19.0642 12.1554 18.7702V13.8582C12.1554 13.6659 11.9957 13.5099 11.7988 13.5099C11.602 13.5099 11.4423 13.6659 11.4423 13.8582V18.7702C11.4423 19.0642 11.1974 19.3034 10.8964 19.3034C10.5954 19.3034 10.3505 19.0642 10.3505 18.7702V9.62397C10.3505 9.43163 10.1909 9.27568 9.99398 9.27568C9.7971 9.27568 9.63746 9.43163 9.63746 9.62397V13.7872C9.63746 14.0531 9.416 14.2694 9.14378 14.2694C8.87156 14.2694 8.65011 14.0531 8.65011 13.7872V9.35674C8.65011 8.46024 9.22728 7.8535 10.3656 7.55346C10.488 7.52115 10.5836 7.42786 10.6168 7.30829C10.6499 7.18877 10.6156 7.061 10.5266 6.9728C10.1993 6.6482 10.019 6.21872 10.019 5.76347C10.019 4.81312 10.8104 4.03995 11.7833 4.03995C12.7561 4.03995 13.5476 4.81312 13.5476 5.76347C13.5476 6.2158 13.3691 6.64333 13.0452 6.96738C12.9565 7.05604 12.9228 7.18399 12.9565 7.30343C12.9903 7.42286 13.0865 7.51578 13.2091 7.54743C14.3625 7.8452 14.9473 8.45389 14.9473 9.35674V13.7872C14.9473 14.0531 14.7259 14.2695 14.4536 14.2695C14.1814 14.2695 13.96 14.0531 13.96 13.7872V9.62401C13.96 9.43168 13.8004 9.27573 13.6035 9.27573C13.4066 9.27573 13.2469 9.43168 13.2469 9.62401V16.1838C13.2469 16.3761 13.4066 16.5321 13.6035 16.5321C13.8003 16.5321 13.96 16.3762 13.96 16.1838V14.8628C14.1107 14.9291 14.2779 14.966 14.4536 14.966C15.119 14.966 15.6603 14.4372 15.6603 13.7873V9.35674C15.6606 8.28135 15.0377 7.46994 13.8931 7.03282Z"
        fill="#594E3C"
      />
      <Path
        d="M22.4257 3.68943C22.6652 3.31116 22.7934 2.87455 22.7934 2.42009C22.7934 1.08563 21.6821 0 20.316 0C18.9501 0 17.8387 1.08563 17.8387 2.42009C17.8387 2.87877 17.9691 3.31881 18.2124 3.69912C17.0837 4.13842 16.4699 4.94636 16.4699 6.01336V8.09462C16.4699 8.28695 16.6295 8.4429 16.8264 8.4429C17.0233 8.4429 17.1829 8.28695 17.1829 8.09462V6.01336C17.1829 5.11686 17.7601 4.51011 18.8984 4.21007C19.0208 4.17777 19.1164 4.08448 19.1496 3.96491C19.1828 3.84538 19.1484 3.71761 19.0595 3.62942C18.7321 3.30482 18.5518 2.87534 18.5518 2.42009C18.5518 1.46974 19.3432 0.696565 20.3161 0.696565C21.2889 0.696565 22.0804 1.46974 22.0804 2.42009C22.0804 2.87242 21.9019 3.29995 21.578 3.62399C21.4893 3.71265 21.4556 3.84061 21.4893 3.96004C21.5231 4.07947 21.6193 4.17239 21.7419 4.20405C22.8953 4.50181 23.4801 5.11051 23.4801 6.01336V12.1156C23.4801 12.3814 23.2587 12.5978 22.9864 12.5978C22.7143 12.5978 22.4928 12.3814 22.4928 12.1156V6.28063C22.4928 6.0883 22.3332 5.93235 22.1363 5.93235C21.9394 5.93235 21.7798 6.0883 21.7798 6.28063V18.7702C21.7798 19.0642 21.5349 19.3035 21.2339 19.3035C20.9329 19.3035 20.688 19.0642 20.688 18.7702V12.1866C20.688 11.9942 20.5284 11.8383 20.3314 11.8383C20.1345 11.8383 19.9749 11.9942 19.9749 12.1866V18.7702C19.9749 19.0642 19.73 19.3035 19.429 19.3035C19.128 19.3035 18.8831 19.0642 18.8831 18.7702V6.28063C18.8831 6.0883 18.7235 5.93235 18.5266 5.93235C18.3297 5.93235 18.1701 6.0883 18.1701 6.28063V12.1156C18.1701 12.3814 17.9486 12.5978 17.6764 12.5978C17.4042 12.5978 17.1828 12.3814 17.1828 12.1156V9.4877C17.1828 9.29537 17.0232 9.13942 16.8262 9.13942C16.6293 9.13942 16.4697 9.29537 16.4697 9.4877V12.1156C16.4697 12.7655 17.011 13.2943 17.6764 13.2943C17.8522 13.2943 18.0193 13.2574 18.17 13.1911V18.7702C18.17 19.4483 18.7348 20 19.4289 20C19.7825 20 20.1024 19.8569 20.3314 19.6269C20.5603 19.8569 20.8802 20 21.2338 20C21.9279 20 22.4927 19.4483 22.4927 18.7702V13.1911C22.6434 13.2574 22.8106 13.2943 22.9864 13.2943C23.6517 13.2943 24.193 12.7655 24.193 12.1156V6.01336C24.1931 4.93797 23.5703 4.12656 22.4257 3.68943Z"
        fill="#594E3C"
      />
    </Svg>
  );
}
