import { Component, Vue } from "vue-property-decorator";
import CalendarIcon from "@mr-hope/vuepress-shared-utils/icons/CalendarIcon.vue";

@Component({ components: { CalendarIcon } })
export default class TimeInfo extends Vue {
  private get time(): string {
    const { time } = this.$frontmatter;

    if (typeof time === "string") {
      if (time.indexOf("T") !== -1) {
        const [date, temp] = time.split("T");
        const [moment] = temp.split(".");

        return `${date} ${moment === "00:00:00" ? "" : moment}`;
      }

      return time;
    }

    return "";
  }

  private get hint(): string {
    return PAGE_INFO_I18N[this.$localePath || "/"].time;
  }
}
