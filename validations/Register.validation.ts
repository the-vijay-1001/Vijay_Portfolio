import i18next from "i18next";
import * as yup from "yup";

export default function validation() {
    return yup.object().shape({
        fullName: yup
            .string()
            .required(i18next.t("validation.userAuth.firstName"))
            .min(3, i18next.t("validation.common.minCharacters"))
            .matches(/^[^\s].+[^\s]$/g, "name must valid"),

        email: yup
            .string()
            .required(i18next.t("validation.userAuth.email"))
            .email(i18next.t("validation.userAuth.validEmail"))
            .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, i18next.t("validation.userAuth.validEmail")),
        message: yup
            .string()
            .required(i18next.t("validataion.userAuth.lastName"))
            .min(3, i18next.t("validation.common.minCharacters"))
            .matches(/^[^\s].+[^\s]$/g, i18next.t("validation.common.noSpace")),
        phone: yup
            .string()
            .min(4, i18next.t("validation.userAuth.validPassword"))
            .max(16, i18next.t("validation.userAuth.validPassword"))
            .required(i18next.t("validation.userAuth.password"))
            .matches(/^(?!0+$)[0-9]{4,16}$/, i18next.t("validation.common.noSpace")),
    });
}
