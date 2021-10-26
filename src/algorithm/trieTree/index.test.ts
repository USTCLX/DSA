import { TrieTree } from "./index";

const data = [
  {
    display_name: "1.dewdecdsc",
    object_name: "1.dewdecdsc"
  },
  {
    display_name: "1.saxsaxsaxsaxasxs",
    object_name: "1.saxsaxsaxsaxasxs"
  },
  {
    display_name: "1.testtest",
    object_name: "1.testtest"
  },
  {
    display_name: "1.xxxxxxxxx",
    object_name: "1.xxxxxxxxx"
  },
  {
    display_name: "auto_test.endpoint.dbidfcccdcebaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.dbidfcccdcebaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.dgdijadcdcefaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.dgdijadcdcefaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.fcdcjbbbdceeaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.fcdcjbbbdceeaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.fgfgbfbadcebaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.fgfgbfbadcebaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.ficdcdahdcebaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.ficdcdahdcebaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.hiebecafdcecaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.hiebecafdcecaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.endpoint.jfabaadedcefaaeaibfejbdbacaajjjg",
    object_name: "auto_test.endpoint.jfabaadedcefaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.bgbdhdcjdcdcaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.bgbdhdcjdcdcaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.cdcfjcebdcdcaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.cdcfjcebdcdcaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.cfiijdajdcdeaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.cfiijdajdcdeaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.ebdfeijjdcdcaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.ebdfeijjdcdcaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.eccgeijjdcdaaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.eccgeijjdcdaaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.fecheadedcdhaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.fecheadedcdhaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.fgbafabadcdhaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.fgbafabadcdhaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_configs.fhihjhfddcdhaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_configs.fhihjhfddcdhaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_traffic.gefbfaccdcdgaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_traffic.gefbfaccdcdgaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "auto_test.spex_traffic.habggjfadcdgaaeaibfejbdbacaajjjg",
    object_name: "auto_test.spex_traffic.habggjfadcdgaaeaibfejbdbacaajjjg"
  },
  {
    display_name: "garena.booyah.app.chat",
    object_name: "garena.booyah.app.chat"
  },
  {
    display_name: "garena.booyah.app.transcode",
    object_name: "garena.booyah.app.transcode"
  },
  {
    display_name: "garena.booyah.db.stream",
    object_name: "garena.booyah.db.stream"
  },
  {
    display_name: "garena.booyah.srs.ingest",
    object_name: "garena.booyah.srs.ingest"
  },
  {
    display_name: "garena.booyah.srs.record",
    object_name: "garena.booyah.srs.record"
  },
  {
    display_name: "shopee.a_vnc.test",
    object_name: "shopee.a_vnc.test"
  },
  {
    display_name: "shopee.a_vnc.test2",
    object_name: "shopee.a_vnc.test2"
  },
  {
    display_name: "shopee.a_zc.cachecloud_test01",
    object_name: "shopee.a_zc.cachecloud_test01"
  },
  {
    display_name: "shopee.a_zc.cc2",
    object_name: "shopee.a_zc.cc2"
  },
  {
    display_name: "shopee.a_zc.stale",
    object_name: "shopee.a_zc.stale"
  },
  {
    display_name: "shopee.a_zc.testmonitor",
    object_name: "shopee.a_zc.testmonitor"
  },
  {
    display_name: "shopee.a_zc.testquota",
    object_name: "shopee.a_zc.testquota"
  },
  {
    display_name: "shopee.cb.test.api",
    object_name: "shopee.cb.test.api"
  },
  {
    display_name: "shopee.cicd.gitlab.11qq",
    object_name: "shopee.cicd.gitlab.11qq"
  },
  {
    display_name: "shopee.cicd.gitlab.a",
    object_name: "shopee.cicd.gitlab.a"
  },
  {
    display_name: "shopee.cicd.gitlab.aa",
    object_name: "shopee.cicd.gitlab.aa"
  },
  {
    display_name: "shopee.cicd.gitlab.aasad",
    object_name: "shopee.cicd.gitlab.aasad"
  },
  {
    display_name: "shopee.cicd.gitlab.asdasd",
    object_name: "shopee.cicd.gitlab.asdasd"
  },
  {
    display_name: "shopee.cicd.gitlab.b",
    object_name: "shopee.cicd.gitlab.b"
  },
  {
    display_name: "shopee.cicd.gitlab.bbc",
    object_name: "shopee.cicd.gitlab.bbc"
  },
  {
    display_name: "shopee.cicd.gitlab.c",
    object_name: "shopee.cicd.gitlab.c"
  },
  {
    display_name: "shopee.cicd.gitlab.d",
    object_name: "shopee.cicd.gitlab.d"
  },
  {
    display_name: "shopee.cicd.gitlab.haotiantest",
    object_name: "shopee.cicd.gitlab.haotiantest"
  },
  {
    display_name: "shopee.cicd.gitlab.kubesdntest1",
    object_name: "shopee.cicd.gitlab.kubesdntest1"
  },
  {
    display_name: "shopee.cicd.gitlab.kubesdntest2",
    object_name: "shopee.cicd.gitlab.kubesdntest2"
  },
  {
    display_name: "shopee.cicd.gitlab.kubesdntest3",
    object_name: "shopee.cicd.gitlab.kubesdntest3"
  },
  {
    display_name: "shopee.cicd.gitlab.kubesdntest4",
    object_name: "shopee.cicd.gitlab.kubesdntest4"
  },
  {
    display_name: "shopee.cicd.gitlab.newosp",
    object_name: "shopee.cicd.gitlab.newosp"
  },
  {
    display_name: "shopee.cicd.gitlab.xx.xx.xx",
    object_name: "shopee.cicd.gitlab.xx.xx.xx"
  },
  {
    display_name: "shopee.content_intelligence.uncategorised.dsad",
    object_name: "shopee.content_intelligence.uncategorised.dsad"
  },
  {
    display_name: "shopee.content_intelligence.uncategorised.init",
    object_name: "shopee.content_intelligence.uncategorised.init"
  },
  {
    display_name: "shopee.customer_service.chatbot.init",
    object_name: "shopee.customer_service.chatbot.init"
  },
  {
    display_name: "shopee.customer_service.chatbot.see",
    object_name: "shopee.customer_service.chatbot.see"
  },
  {
    display_name: "shopee.customer_service.inhouse.init",
    object_name: "shopee.customer_service.inhouse.init"
  },
  {
    display_name: "shopee.data_science.data_science.test",
    object_name: "shopee.data_science.data_science.test"
  },
  {
    display_name: "shopee.data.api",
    object_name: "shopee.data.api"
  },
  {
    display_name: "shopee.data.data_engineering.api",
    object_name: "shopee.data.data_engineering.api"
  },
  {
    display_name: "shopee.data.data_engineering.jenkins",
    object_name: "shopee.data.data_engineering.jenkins"
  },
  {
    display_name: "shopee.data.data_engineering.mylife",
    object_name: "shopee.data.data_engineering.mylife"
  },
  {
    display_name: "shopee.data.hello.world",
    object_name: "shopee.data.hello.world"
  },
  {
    display_name: "shopee.data.new.b",
    object_name: "shopee.data.new.b"
  },
  {
    display_name: "shopee.data.new.bbb",
    object_name: "shopee.data.new.bbb"
  },
  {
    display_name: "shopee.data.test.new_test",
    object_name: "shopee.data.test.new_test"
  },
  {
    display_name: "shopee.data.testservicename.a.b",
    object_name: "shopee.data.testservicename.a.b"
  },
  {
    display_name: "shopee.dba.a.a",
    object_name: "shopee.dba.a.a"
  },
  {
    display_name: "shopee.deep.ads.es",
    object_name: "shopee.deep.ads.es"
  },
  {
    display_name: "shopee.deep.ads.haotian",
    object_name: "shopee.deep.ads.haotian"
  },
  {
    display_name: "shopee.deep.testing.testingapi",
    object_name: "shopee.deep.testing.testingapi"
  },
  {
    display_name: "shopee.deep.testing1.testing2",
    object_name: "shopee.deep.testing1.testing2"
  },
  {
    display_name:
      "shopee.deep.zycreatetest.zycreatetest_existing_service_group.test",
    object_name:
      "shopee.deep.zycreatetest.zycreatetest_existing_service_group.test"
  },
  {
    display_name: "shopee.fraud.haotian.alex_test",
    object_name: "shopee.fraud.haotian.alex_test"
  },
  {
    display_name: "shopee.fraud.haotian.alex_test_2",
    object_name: "shopee.fraud.haotian.alex_test_2"
  },
  {
    display_name: "shopee.fraud.haotian.alex_test_3",
    object_name: "shopee.fraud.haotian.alex_test_3"
  },
  {
    display_name: "shopee.fraud.haotian.alextest4",
    object_name: "shopee.fraud.haotian.alextest4"
  },
  {
    display_name: "shopee.fraud.haotian.async",
    object_name: "shopee.fraud.haotian.async"
  },
  {
    display_name: "shopee.fraud.haotian.certerror",
    object_name: "shopee.fraud.haotian.certerror"
  },
  {
    display_name: "shopee.fraud.haotian.demo",
    object_name: "shopee.fraud.haotian.demo"
  },
  {
    display_name: "shopee.fraud.haotian.demo_mp",
    object_name: "shopee.fraud.haotian.demo_mp"
  },
  {
    display_name: "shopee.fraud.haotian.gogogo",
    object_name: "shopee.fraud.haotian.gogogo"
  },
  {
    display_name: "shopee.fraud.haotian.haotian",
    object_name: "shopee.fraud.haotian.haotian"
  },
  {
    display_name: "shopee.fraud.haotian.holysh",
    object_name: "shopee.fraud.haotian.holysh"
  },
  {
    display_name: "shopee.fraud.haotian.letstry",
    object_name: "shopee.fraud.haotian.letstry"
  },
  {
    display_name: "shopee.fraud.haotian.new_osp",
    object_name: "shopee.fraud.haotian.new_osp"
  },
  {
    display_name: "shopee.fraud.haotian.new_osp_test",
    object_name: "shopee.fraud.haotian.new_osp_test"
  },
  {
    display_name: "shopee.fraud.haotian.new_schema",
    object_name: "shopee.fraud.haotian.new_schema"
  },
  {
    display_name: "shopee.fraud.haotian.new_serivce",
    object_name: "shopee.fraud.haotian.new_serivce"
  },
  {
    display_name: "shopee.fraud.haotian.no_service",
    object_name: "shopee.fraud.haotian.no_service"
  },
  {
    display_name: "shopee.fraud.haotian.osp",
    object_name: "shopee.fraud.haotian.osp"
  },
  {
    display_name: "shopee.fraud.haotian.sgw_test",
    object_name: "shopee.fraud.haotian.sgw_test"
  },
  {
    display_name: "shopee.fraud.haotian.t1",
    object_name: "shopee.fraud.haotian.t1"
  },
  {
    display_name: "shopee.fraud.haotian.t3",
    object_name: "shopee.fraud.haotian.t3"
  },
  {
    display_name: "shopee.fraud.haotian.t4",
    object_name: "shopee.fraud.haotian.t4"
  },
  {
    display_name: "shopee.fraud.haotian.t5",
    object_name: "shopee.fraud.haotian.t5"
  },
  {
    display_name: "shopee.fraud.haotian.test",
    object_name: "shopee.fraud.haotian.test"
  },
  {
    display_name: "shopee.fraud.haotian.testnew_service",
    object_name: "shopee.fraud.haotian.testnew_service"
  },
  {
    display_name: "shopee.fraud.haotian.tt1",
    object_name: "shopee.fraud.haotian.tt1"
  },
  {
    display_name: "shopee.fraud.haotian.tt2",
    object_name: "shopee.fraud.haotian.tt2"
  },
  {
    display_name: "shopee.fraud.haotian.tt4",
    object_name: "shopee.fraud.haotian.tt4"
  },
  {
    display_name: "shopee.fraud.haotian.tt56",
    object_name: "shopee.fraud.haotian.tt56"
  },
  {
    display_name: "shopee.fraud.haotian.yuri",
    object_name: "shopee.fraud.haotian.yuri"
  },
  {
    display_name: "shopee.fraud.linbao.a",
    object_name: "shopee.fraud.linbao.a"
  },
  {
    display_name: "shopee.fraud.newlayer.test",
    object_name: "shopee.fraud.newlayer.test"
  },
  {
    display_name: "shopee.fraud.newlayer1.test",
    object_name: "shopee.fraud.newlayer1.test"
  },
  {
    display_name: "shopee.fraud.newlayer10.test3",
    object_name: "shopee.fraud.newlayer10.test3"
  },
  {
    display_name: "shopee.fraud.newlayer11.test3",
    object_name: "shopee.fraud.newlayer11.test3"
  },
  {
    display_name: "shopee.fraud.newlayer12.test3",
    object_name: "shopee.fraud.newlayer12.test3"
  },
  {
    display_name: "shopee.fraud.newlayer13.test3",
    object_name: "shopee.fraud.newlayer13.test3"
  },
  {
    display_name: "shopee.fraud.newlayer14.test3",
    object_name: "shopee.fraud.newlayer14.test3"
  },
  {
    display_name: "shopee.fraud.newlayer15.test3",
    object_name: "shopee.fraud.newlayer15.test3"
  },
  {
    display_name: "shopee.fraud.newlayer2.test2",
    object_name: "shopee.fraud.newlayer2.test2"
  },
  {
    display_name: "shopee.fraud.newlayer2.test3",
    object_name: "shopee.fraud.newlayer2.test3"
  },
  {
    display_name: "shopee.fraud.newlayer3.test3",
    object_name: "shopee.fraud.newlayer3.test3"
  },
  {
    display_name: "shopee.fraud.newlayer5.test3",
    object_name: "shopee.fraud.newlayer5.test3"
  },
  {
    display_name: "shopee.fraud.newlayer6.test3",
    object_name: "shopee.fraud.newlayer6.test3"
  },
  {
    display_name: "shopee.fraud.newlayer7.test3",
    object_name: "shopee.fraud.newlayer7.test3"
  },
  {
    display_name: "shopee.fraud.newlayer8.test3",
    object_name: "shopee.fraud.newlayer8.test3"
  },
  {
    display_name: "shopee.fraud.newlayer9.test3",
    object_name: "shopee.fraud.newlayer9.test3"
  },
  {
    display_name: "shopee.fraud.xiaoxiang.a",
    object_name: "shopee.fraud.xiaoxiang.a"
  },
  {
    display_name: "shopee.fraud.yintong.b",
    object_name: "shopee.fraud.yintong.b"
  },
  {
    display_name: "shopee.infrastructure.k8s.backend",
    object_name: "shopee.infrastructure.k8s.backend"
  },
  {
    display_name: "shopee.lixytest",
    object_name: "shopee.lixytest"
  },
  {
    display_name: "shopee.marketplace.a.b.b.c.d",
    object_name: "shopee.marketplace.a.b.b.c.d"
  },
  {
    display_name: "shopee.marketplace.api",
    object_name: "shopee.marketplace.api"
  },
  {
    display_name: "shopee.marketplace.cmdb.api_v2",
    object_name: "shopee.marketplace.cmdb.api_v2"
  },
  {
    display_name: "shopee.marketplace.common.backend.main",
    object_name: "shopee.marketplace.common.backend.main"
  },
  {
    display_name: "shopee.marketplace.mall.sd.sd.sd",
    object_name: "shopee.marketplace.mall.sd.sd.sd"
  },
  {
    display_name: "shopee.marketplace.payment.swp.one.two.five",
    object_name: "shopee.marketplace.payment.swp.one.two.five"
  },
  {
    display_name: "shopee.marketplace.payment.swp.one.two.four",
    object_name: "shopee.marketplace.payment.swp.one.two.four"
  },
  {
    display_name: "shopee.marketplace.payment.swp.one.two.seven",
    object_name: "shopee.marketplace.payment.swp.one.two.seven"
  },
  {
    display_name: "shopee.marketplace.payment.swp.one.two.six",
    object_name: "shopee.marketplace.payment.swp.one.two.six"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest1",
    object_name: "shopee.marketplace.payment.swp.paymenttest1"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest2",
    object_name: "shopee.marketplace.payment.swp.paymenttest2"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest3",
    object_name: "shopee.marketplace.payment.swp.paymenttest3"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest4",
    object_name: "shopee.marketplace.payment.swp.paymenttest4"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest5",
    object_name: "shopee.marketplace.payment.swp.paymenttest5"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest6",
    object_name: "shopee.marketplace.payment.swp.paymenttest6"
  },
  {
    display_name: "shopee.marketplace.payment.swp.paymenttest7",
    object_name: "shopee.marketplace.payment.swp.paymenttest7"
  },
  {
    display_name: "shopee.marketplace.payment.swp.test01",
    object_name: "shopee.marketplace.payment.swp.test01"
  },
  {
    display_name: "shopee.marketplace.payment.test.jenkins",
    object_name: "shopee.marketplace.payment.test.jenkins"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinshopeepay",
    object_name: "shopee.marketplace.payment.test.testjenkinshopeepay"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinstaging",
    object_name: "shopee.marketplace.payment.test.testjenkinstaging"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinstaginglive",
    object_name: "shopee.marketplace.payment.test.testjenkinstaginglive"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinstagingtest",
    object_name: "shopee.marketplace.payment.test.testjenkinstagingtest"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinsuattest",
    object_name: "shopee.marketplace.payment.test.testjenkinsuattest"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkintest",
    object_name: "shopee.marketplace.payment.test.testjenkintest"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinuat",
    object_name: "shopee.marketplace.payment.test.testjenkinuat"
  },
  {
    display_name: "shopee.marketplace.payment.test.testjenkinuatlive",
    object_name: "shopee.marketplace.payment.test.testjenkinuatlive"
  },
  {
    display_name: "shopee.marketplace.payment.testjenkinshopee",
    object_name: "shopee.marketplace.payment.testjenkinshopee"
  },
  {
    display_name: "shopee.marketplace.payment.wallet.mapi",
    object_name: "shopee.marketplace.payment.wallet.mapi"
  },
  {
    display_name: "shopee.marketplace.promotion.promotion.logistics",
    object_name: "shopee.marketplace.promotion.promotion.logistics"
  },
  {
    display_name: "shopee.marketplace.promotion.promotion.logisticscron",
    object_name: "shopee.marketplace.promotion.promotion.logisticscron"
  },
  {
    display_name: "shopee.marketplace.test.autocorrect",
    object_name: "shopee.marketplace.test.autocorrect"
  },
  {
    display_name: "shopee.marketplace.test.test_jc",
    object_name: "shopee.marketplace.test.test_jc"
  },
  {
    display_name: "shopee.marketplace.testest.test",
    object_name: "shopee.marketplace.testest.test"
  },
  {
    display_name: "shopee.nttest.b",
    object_name: "shopee.nttest.b"
  },
  {
    display_name: "shopee.nttest.c",
    object_name: "shopee.nttest.c"
  },
  {
    display_name: "shopee.nttest.d",
    object_name: "shopee.nttest.d"
  },
  {
    display_name: "shopee.quota.a2",
    object_name: "shopee.quota.a2"
  },
  {
    display_name: "shopee.quota.collector",
    object_name: "shopee.quota.collector"
  },
  {
    display_name: "shopee.quota.do_not_delete_coz_for_test",
    object_name: "shopee.quota.do_not_delete_coz_for_test"
  },
  {
    display_name: "shopee.security.uncategorised.init",
    object_name: "shopee.security.uncategorised.init"
  },
  {
    display_name: "shopee.seller.aaaaa.bbbbb",
    object_name: "shopee.seller.aaaaa.bbbbb"
  },
  {
    display_name: "shopee.seller.sellerapp.memcached",
    object_name: "shopee.seller.sellerapp.memcached"
  },
  {
    display_name: "shopee.seller.shopmanagement.shopbff",
    object_name: "shopee.seller.shopmanagement.shopbff"
  },
  {
    display_name: "shopee.seller.uncategorised.gtstest.szpipeline",
    object_name: "shopee.seller.uncategorised.gtstest.szpipeline"
  },
  {
    display_name: "shopee.servicecmdb",
    object_name: "shopee.servicecmdb"
  },
  {
    display_name: "shopee.shared_services.account.admin",
    object_name: "shopee.shared_services.account.admin"
  },
  {
    display_name: "shopee.shared_services.account.core.core",
    object_name: "shopee.shared_services.account.core.core"
  },
  {
    display_name: "shopee.shared_services.account.gateway",
    object_name: "shopee.shared_services.account.gateway"
  },
  {
    display_name: "shopee.shared_services.account.testvc123",
    object_name: "shopee.shared_services.account.testvc123"
  },
  {
    display_name: "shopee.shared_services.account.usertag",
    object_name: "shopee.shared_services.account.usertag"
  },
  {
    display_name: "shopee.shared_services.alven.dasdasd",
    object_name: "shopee.shared_services.alven.dasdasd"
  },
  {
    display_name: "shopee.shared_services.chat.adminportal",
    object_name: "shopee.shared_services.chat.adminportal"
  },
  {
    display_name: "shopee.shared_services.chat.angbao",
    object_name: "shopee.shared_services.chat.angbao"
  },
  {
    display_name: "shopee.shared_services.chat.bff",
    object_name: "shopee.shared_services.chat.bff"
  },
  {
    display_name: "shopee.shared_services.chat.cointransfer",
    object_name: "shopee.shared_services.chat.cointransfer"
  },
  {
    display_name: "shopee.shared_services.chat.friends.bff",
    object_name: "shopee.shared_services.chat.friends.bff"
  },
  {
    display_name: "shopee.shared_services.chat.gateway",
    object_name: "shopee.shared_services.chat.gateway"
  },
  {
    display_name: "shopee.shared_services.chat.offer.core",
    object_name: "shopee.shared_services.chat.offer.core"
  },
  {
    display_name: "shopee.shared_services.core",
    object_name: "shopee.shared_services.core"
  },
  {
    display_name: "shopee.shared_services.coreserver.httpgateway",
    object_name: "shopee.shared_services.coreserver.httpgateway"
  },
  {
    display_name: "shopee.shared_services.item_services.item_info.item_info",
    object_name: "shopee.shared_services.item_services.item_info.item_info"
  },
  {
    display_name: "shopee.shared_services.listing.abc",
    object_name: "shopee.shared_services.listing.abc"
  },
  {
    display_name: "shopee.shared_services.location.address",
    object_name: "shopee.shared_services.location.address"
  },
  {
    display_name: "shopee.shared_services.tagbackground",
    object_name: "shopee.shared_services.tagbackground"
  },
  {
    display_name: "shopee.shared_services.test123.abc123",
    object_name: "shopee.shared_services.test123.abc123"
  },
  {
    display_name: "shopee.shared_services.user_services.account",
    object_name: "shopee.shared_services.user_services.account"
  },
  {
    display_name: "shopee.shared_services.user_services.test",
    object_name: "shopee.shared_services.user_services.test"
  },
  {
    display_name: "shopee.shopeepay.test.jenkinstest",
    object_name: "shopee.shopeepay.test.jenkinstest"
  },
  {
    display_name: "shopee.shopeepay.test.jenkinstest2",
    object_name: "shopee.shopeepay.test.jenkinstest2"
  },
  {
    display_name: "shopee.shopeepay.test.policygrouptest",
    object_name: "shopee.shopeepay.test.policygrouptest"
  },
  {
    display_name: "shopee.shopeepay.test.test.policygrouptest2",
    object_name: "shopee.shopeepay.test.test.policygrouptest2"
  },
  {
    display_name: "shopee.shopeepay.test.test.policygrouptest3",
    object_name: "shopee.shopeepay.test.test.policygrouptest3"
  },
  {
    display_name: "shopee.shopeepay.test.test.policygrouptest4",
    object_name: "shopee.shopeepay.test.test.policygrouptest4"
  },
  {
    display_name: "shopee.shopeepay.test.test.policygrouptest5",
    object_name: "shopee.shopeepay.test.test.policygrouptest5"
  },
  {
    display_name: "shopee.shopeepay.test.test.policygrouptest6",
    object_name: "shopee.shopeepay.test.test.policygrouptest6"
  },
  {
    display_name: "shopee.shopeepay.test.testpolicygroup",
    object_name: "shopee.shopeepay.test.testpolicygroup"
  },
  {
    display_name: "shopee.swp.api",
    object_name: "shopee.swp.api"
  },
  {
    display_name: "shopee.tc.mkt.coins",
    object_name: "shopee.tc.mkt.coins"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.agent",
    object_name: "shopee.technical_platform.a_arvin.agent"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.agent2",
    object_name: "shopee.technical_platform.a_arvin.agent2"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.agent3",
    object_name: "shopee.technical_platform.a_arvin.agent3"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.agent4",
    object_name: "shopee.technical_platform.a_arvin.agent4"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.cachecloud.agent",
    object_name: "shopee.technical_platform.a_arvin.cachecloud.agent"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.cc1",
    object_name: "shopee.technical_platform.a_arvin.cc1"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.k8s",
    object_name: "shopee.technical_platform.a_arvin.k8s"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.kubernetes.agent",
    object_name: "shopee.technical_platform.a_arvin.kubernetes.agent"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.mesos.worker",
    object_name: "shopee.technical_platform.a_arvin.mesos.worker"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.myservice",
    object_name: "shopee.technical_platform.a_arvin.myservice"
  },
  {
    display_name: "shopee.technical_platform.a_arvin.otherservice",
    object_name: "shopee.technical_platform.a_arvin.otherservice"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.a_vnc",
    object_name: "shopee.technical_platform.a_vnc.a_vnc"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.alextest1",
    object_name: "shopee.technical_platform.a_vnc.alextest1"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.gavin",
    object_name: "shopee.technical_platform.a_vnc.gavin"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.marketplace",
    object_name: "shopee.technical_platform.a_vnc.marketplace"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.test",
    object_name: "shopee.technical_platform.a_vnc.test"
  },
  {
    display_name: "shopee.technical_platform.a_vnc.test08",
    object_name: "shopee.technical_platform.a_vnc.test08"
  },
  {
    display_name: "shopee.technical_platform.a_yuri.test",
    object_name: "shopee.technical_platform.a_yuri.test"
  },
  {
    display_name: "shopee.technical_platform.a_zecheng.test",
    object_name: "shopee.technical_platform.a_zecheng.test"
  },
  {
    display_name: "shopee.technical_platform.a_zengqiang.test1",
    object_name: "shopee.technical_platform.a_zengqiang.test1"
  },
  {
    display_name: "shopee.technical_platform.a_zengqiang.test2",
    object_name: "shopee.technical_platform.a_zengqiang.test2"
  },
  {
    display_name: "shopee.technical_platform.alex.osp_test",
    object_name: "shopee.technical_platform.alex.osp_test"
  },
  {
    display_name: "shopee.technical_platform.alex.test1",
    object_name: "shopee.technical_platform.alex.test1"
  },
  {
    display_name: "shopee.technical_platform.alex.test2",
    object_name: "shopee.technical_platform.alex.test2"
  },
  {
    display_name: "shopee.technical_platform.app.fe",
    object_name: "shopee.technical_platform.app.fe"
  },
  {
    display_name: "shopee.technical_platform.app.gavin",
    object_name: "shopee.technical_platform.app.gavin"
  },
  {
    display_name: "shopee.technical_platform.app.rn.sellerbundle",
    object_name: "shopee.technical_platform.app.rn.sellerbundle"
  },
  {
    display_name: "shopee.technical_platform.auto.auto_discovery",
    object_name: "shopee.technical_platform.auto.auto_discovery"
  },
  {
    display_name: "shopee.technical_platform.auto.discovery",
    object_name: "shopee.technical_platform.auto.discovery"
  },
  {
    display_name: "shopee.technical_platform.autob.bnbn.bnbn",
    object_name: "shopee.technical_platform.autob.bnbn.bnbn"
  },
  {
    display_name: "shopee.technical_platform.autob.c",
    object_name: "shopee.technical_platform.autob.c"
  },
  {
    display_name: "shopee.technical_platform.axxxaa.commons_flinks",
    object_name: "shopee.technical_platform.axxxaa.commons_flinks"
  },
  {
    display_name: "shopee.technical_platform.c1.c2.1",
    object_name: "shopee.technical_platform.c1.c2.1"
  },
  {
    display_name: "shopee.technical_platform.canaryanalysis.kayenta",
    object_name: "shopee.technical_platform.canaryanalysis.kayenta"
  },
  {
    display_name: "shopee.technical_platform.cc.cccc",
    object_name: "shopee.technical_platform.cc.cccc"
  },
  {
    display_name: "shopee.technical_platform.ccc.ddd",
    object_name: "shopee.technical_platform.ccc.ddd"
  },
  {
    display_name: "shopee.technical_platform.copi",
    object_name: "shopee.technical_platform.copi"
  },
  {
    display_name: "shopee.technical_platform.david.test",
    object_name: "shopee.technical_platform.david.test"
  },
  {
    display_name: "shopee.technical_platform.deployplatform.api",
    object_name: "shopee.technical_platform.deployplatform.api"
  },
  {
    display_name: "shopee.technical_platform.entrytask.folder.api",
    object_name: "shopee.technical_platform.entrytask.folder.api"
  },
  {
    display_name: "shopee.technical_platform.entrytask.wenjunli",
    object_name: "shopee.technical_platform.entrytask.wenjunli"
  },
  {
    display_name: "shopee.technical_platform.gameabr.api",
    object_name: "shopee.technical_platform.gameabr.api"
  },
  {
    display_name: "shopee.technical_platform.imagesearch.featurestorage",
    object_name: "shopee.technical_platform.imagesearch.featurestorage"
  },
  {
    display_name: "shopee.technical_platform.isfe.space.app",
    object_name: "shopee.technical_platform.isfe.space.app"
  },
  {
    display_name: "shopee.technical_platform.jenkinstest.new",
    object_name: "shopee.technical_platform.jenkinstest.new"
  },
  {
    display_name: "shopee.technical_platform.keshia.bromotest",
    object_name: "shopee.technical_platform.keshia.bromotest"
  },
  {
    display_name: "shopee.technical_platform.keshia.bromotestempty",
    object_name: "shopee.technical_platform.keshia.bromotestempty"
  },
  {
    display_name: "shopee.technical_platform.kiwi.test_service",
    object_name: "shopee.technical_platform.kiwi.test_service"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.a.a",
    object_name: "shopee.technical_platform.limtc.a.a.a"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.b.c.d",
    object_name: "shopee.technical_platform.limtc.a.b.c.d"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.c.asdasd",
    object_name: "shopee.technical_platform.limtc.a.c.asdasd"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.c.c",
    object_name: "shopee.technical_platform.limtc.a.c.c"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.c.d",
    object_name: "shopee.technical_platform.limtc.a.c.d"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.c.dddd",
    object_name: "shopee.technical_platform.limtc.a.c.dddd"
  },
  {
    display_name: "shopee.technical_platform.limtc.a.c.lkj",
    object_name: "shopee.technical_platform.limtc.a.c.lkj"
  },
  {
    display_name: "shopee.technical_platform.limtc2.test.api1000",
    object_name: "shopee.technical_platform.limtc2.test.api1000"
  },
  {
    display_name: "shopee.technical_platform.limtc2.test.test.api",
    object_name: "shopee.technical_platform.limtc2.test.test.api"
  },
  {
    display_name: "shopee.technical_platform.lxy.coin1",
    object_name: "shopee.technical_platform.lxy.coin1"
  },
  {
    display_name: "shopee.technical_platform.lxy.createtest.efgh",
    object_name: "shopee.technical_platform.lxy.createtest.efgh"
  },
  {
    display_name: "shopee.technical_platform.lxy.createtest.test1234",
    object_name: "shopee.technical_platform.lxy.createtest.test1234"
  },
  {
    display_name: "shopee.technical_platform.lxy.createtest.test222",
    object_name: "shopee.technical_platform.lxy.createtest.test222"
  },
  {
    display_name: "shopee.technical_platform.lxy.efght",
    object_name: "shopee.technical_platform.lxy.efght"
  },
  {
    display_name: "shopee.technical_platform.lxy.groupservice",
    object_name: "shopee.technical_platform.lxy.groupservice"
  },
  {
    display_name: "shopee.technical_platform.lxy.mygroup.service",
    object_name: "shopee.technical_platform.lxy.mygroup.service"
  },
  {
    display_name: "shopee.technical_platform.lxy.service",
    object_name: "shopee.technical_platform.lxy.service"
  },
  {
    display_name: "shopee.technical_platform.lxy.test1234",
    object_name: "shopee.technical_platform.lxy.test1234"
  },
  {
    display_name: "shopee.technical_platform.mptes.a.abcaaa",
    object_name: "shopee.technical_platform.mptes.a.abcaaa"
  },
  {
    display_name: "shopee.technical_platform.mptest.bromo",
    object_name: "shopee.technical_platform.mptest.bromo"
  },
  {
    display_name: "shopee.technical_platform.mptest.serviceb",
    object_name: "shopee.technical_platform.mptest.serviceb"
  },
  {
    display_name: "shopee.technical_platform.mptest.test_osp_pj",
    object_name: "shopee.technical_platform.mptest.test_osp_pj"
  },
  {
    display_name: "shopee.technical_platform.newtest.abcasca.axax.abcccccczzz",
    object_name: "shopee.technical_platform.newtest.abcasca.axax.abcccccczzz"
  },
  {
    display_name: "shopee.technical_platform.newtest.yktest",
    object_name: "shopee.technical_platform.newtest.yktest"
  },
  {
    display_name: "shopee.technical_platform.nttest.a",
    object_name: "shopee.technical_platform.nttest.a"
  },
  {
    display_name: "shopee.technical_platform.nttest.b",
    object_name: "shopee.technical_platform.nttest.b"
  },
  {
    display_name: "shopee.technical_platform.nttest.c",
    object_name: "shopee.technical_platform.nttest.c"
  },
  {
    display_name: "shopee.technical_platform.nttest.d",
    object_name: "shopee.technical_platform.nttest.d"
  },
  {
    display_name: "shopee.technical_platform.nttest.test",
    object_name: "shopee.technical_platform.nttest.test"
  },
  {
    display_name: "shopee.technical_platform.nttest.test1",
    object_name: "shopee.technical_platform.nttest.test1"
  },
  {
    display_name: "shopee.technical_platform.nttest.test2",
    object_name: "shopee.technical_platform.nttest.test2"
  },
  {
    display_name: "shopee.technical_platform.osp.alex.test",
    object_name: "shopee.technical_platform.osp.alex.test"
  },
  {
    display_name: "shopee.technical_platform.osp.alex.test1",
    object_name: "shopee.technical_platform.osp.alex.test1"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.create1",
    object_name: "shopee.technical_platform.osp.haotian.create1"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.create2",
    object_name: "shopee.technical_platform.osp.haotian.create2"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.create3",
    object_name: "shopee.technical_platform.osp.haotian.create3"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.self_test_1",
    object_name: "shopee.technical_platform.osp.haotian.self_test_1"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.trial",
    object_name: "shopee.technical_platform.osp.haotian.trial"
  },
  {
    display_name: "shopee.technical_platform.osp.haotian.tt2",
    object_name: "shopee.technical_platform.osp.haotian.tt2"
  },
  {
    display_name: "shopee.technical_platform.osp.trial",
    object_name: "shopee.technical_platform.osp.trial"
  },
  {
    display_name: "shopee.technical_platform.osp.trial2",
    object_name: "shopee.technical_platform.osp.trial2"
  },
  {
    display_name: "shopee.technical_platform.qa.qaenv",
    object_name: "shopee.technical_platform.qa.qaenv"
  },
  {
    display_name: "shopee.technical_platform.qq.vc",
    object_name: "shopee.technical_platform.qq.vc"
  },
  {
    display_name: "shopee.technical_platform.qq.vv",
    object_name: "shopee.technical_platform.qq.vv"
  },
  {
    display_name: "shopee.technical_platform.quota.a.b1",
    object_name: "shopee.technical_platform.quota.a.b1"
  },
  {
    display_name: "shopee.technical_platform.quota.a.b2.c1",
    object_name: "shopee.technical_platform.quota.a.b2.c1"
  },
  {
    display_name: "shopee.technical_platform.quota.a.b2.c2",
    object_name: "shopee.technical_platform.quota.a.b2.c2"
  },
  {
    display_name: "shopee.technical_platform.quota.a.b3",
    object_name: "shopee.technical_platform.quota.a.b3"
  },
  {
    display_name: "shopee.technical_platform.quota.aaa",
    object_name: "shopee.technical_platform.quota.aaa"
  },
  {
    display_name: "shopee.technical_platform.rm.rmserver",
    object_name: "shopee.technical_platform.rm.rmserver"
  },
  {
    display_name: "shopee.technical_platform.sad.a.api",
    object_name: "shopee.technical_platform.sad.a.api"
  },
  {
    display_name: "shopee.technical_platform.sad.a.mptest.mp",
    object_name: "shopee.technical_platform.sad.a.mptest.mp"
  },
  {
    display_name: "shopee.technical_platform.sean.test1",
    object_name: "shopee.technical_platform.sean.test1"
  },
  {
    display_name: "shopee.technical_platform.shengwei.123aa",
    object_name: "shopee.technical_platform.shengwei.123aa"
  },
  {
    display_name: "shopee.technical_platform.smap.new.api",
    object_name: "shopee.technical_platform.smap.new.api"
  },
  {
    display_name: "shopee.technical_platform.smap.new.service1",
    object_name: "shopee.technical_platform.smap.new.service1"
  },
  {
    display_name: "shopee.technical_platform.spp.cachecloud.agent",
    object_name: "shopee.technical_platform.spp.cachecloud.agent"
  },
  {
    display_name: "shopee.technical_platform.sto.a_vnc.test1",
    object_name: "shopee.technical_platform.sto.a_vnc.test1"
  },
  {
    display_name: "shopee.technical_platform.sto.a_vnc.test2",
    object_name: "shopee.technical_platform.sto.a_vnc.test2"
  },
  {
    display_name: "shopee.technical_platform.sto.a_vnc.test3",
    object_name: "shopee.technical_platform.sto.a_vnc.test3"
  },
  {
    display_name: "shopee.technical_platform.sto.api.gateway",
    object_name: "shopee.technical_platform.sto.api.gateway"
  },
  {
    display_name: "shopee.technical_platform.sto.bbb.aaa",
    object_name: "shopee.technical_platform.sto.bbb.aaa"
  },
  {
    display_name: "shopee.technical_platform.sto.bbb.test",
    object_name: "shopee.technical_platform.sto.bbb.test"
  },
  {
    display_name: "shopee.technical_platform.sto.bromo.ljw",
    object_name: "shopee.technical_platform.sto.bromo.ljw"
  },
  {
    display_name: "shopee.technical_platform.sto.bromo.ljw2test",
    object_name: "shopee.technical_platform.sto.bromo.ljw2test"
  },
  {
    display_name: "shopee.technical_platform.sto.bromo.ljwspex",
    object_name: "shopee.technical_platform.sto.bromo.ljwspex"
  },
  {
    display_name: "shopee.technical_platform.sto.cloud.cachecloud",
    object_name: "shopee.technical_platform.sto.cloud.cachecloud"
  },
  {
    display_name: "shopee.technical_platform.sto.cmdb",
    object_name: "shopee.technical_platform.sto.cmdb"
  },
  {
    display_name: "shopee.technical_platform.sto.deployplatform.api",
    object_name: "shopee.technical_platform.sto.deployplatform.api"
  },
  {
    display_name: "shopee.technical_platform.sto.deployplatform.imagebuild",
    object_name: "shopee.technical_platform.sto.deployplatform.imagebuild"
  },
  {
    display_name: "shopee.technical_platform.sto.deployplatform.release",
    object_name: "shopee.technical_platform.sto.deployplatform.release"
  },
  {
    display_name: "shopee.technical_platform.sto.deployplatform.test",
    object_name: "shopee.technical_platform.sto.deployplatform.test"
  },
  {
    display_name: "shopee.technical_platform.sto.devops.test.uic",
    object_name: "shopee.technical_platform.sto.devops.test.uic"
  },
  {
    display_name: "shopee.technical_platform.sto.diskquotabromotest",
    object_name: "shopee.technical_platform.sto.diskquotabromotest"
  },
  {
    display_name: "shopee.technical_platform.sto.donotapprove.testestest",
    object_name: "shopee.technical_platform.sto.donotapprove.testestest"
  },
  {
    display_name: "shopee.technical_platform.sto.draven.swweb2",
    object_name: "shopee.technical_platform.sto.draven.swweb2"
  },
  {
    display_name: "shopee.technical_platform.sto.draven.test",
    object_name: "shopee.technical_platform.sto.draven.test"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.junyutcp",
    object_name: "shopee.technical_platform.sto.entrytask.junyutcp"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.a",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.a"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.b",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.b"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.c",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.c"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.d",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.d"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.e",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.a.a.e"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.limtc.zhengwenweb",
    object_name: "shopee.technical_platform.sto.entrytask.limtc.zhengwenweb"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.swweb5",
    object_name: "shopee.technical_platform.sto.entrytask.swweb5"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.swwebsg1",
    object_name: "shopee.technical_platform.sto.entrytask.swwebsg1"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.tcpzengqiang",
    object_name: "shopee.technical_platform.sto.entrytask.tcpzengqiang"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.webzengqiang",
    object_name: "shopee.technical_platform.sto.entrytask.webzengqiang"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.wentaomaoweb",
    object_name: "shopee.technical_platform.sto.entrytask.wentaomaoweb"
  },
  {
    display_name: "shopee.technical_platform.sto.entrytask.yuezhanghttp",
    object_name: "shopee.technical_platform.sto.entrytask.yuezhanghttp"
  },
  {
    display_name: "shopee.technical_platform.sto.gtstest.pipelinetest1",
    object_name: "shopee.technical_platform.sto.gtstest.pipelinetest1"
  },
  {
    display_name: "shopee.technical_platform.sto.haotian",
    object_name: "shopee.technical_platform.sto.haotian"
  },
  {
    display_name: "shopee.technical_platform.sto.iamtesting.now",
    object_name: "shopee.technical_platform.sto.iamtesting.now"
  },
  {
    display_name: "shopee.technical_platform.sto.jenkinstest",
    object_name: "shopee.technical_platform.sto.jenkinstest"
  },
  {
    display_name: "shopee.technical_platform.sto.kubernetes.master",
    object_name: "shopee.technical_platform.sto.kubernetes.master"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.ab.ab.ab",
    object_name: "shopee.technical_platform.sto.limtc.ab.ab.ab"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.ab.b.b",
    object_name: "shopee.technical_platform.sto.limtc.ab.b.b"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.ac.ac.ac",
    object_name: "shopee.technical_platform.sto.limtc.ac.ac.ac"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.ad.ad.ad",
    object_name: "shopee.technical_platform.sto.limtc.ad.ad.ad"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.api",
    object_name: "shopee.technical_platform.sto.limtc.api"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.as.as.as",
    object_name: "shopee.technical_platform.sto.limtc.as.as.as"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.c.c.c",
    object_name: "shopee.technical_platform.sto.limtc.c.c.c"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.cv.cv.cv",
    object_name: "shopee.technical_platform.sto.limtc.cv.cv.cv"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc.ee.dd",
    object_name: "shopee.technical_platform.sto.limtc.ee.dd"
  },
  {
    display_name: "shopee.technical_platform.sto.limtc10.b.b.d",
    object_name: "shopee.technical_platform.sto.limtc10.b.b.d"
  },
  {
    display_name: "shopee.technical_platform.sto.lurbromotest",
    object_name: "shopee.technical_platform.sto.lurbromotest"
  },
  {
    display_name: "shopee.technical_platform.sto.lurbromotest4",
    object_name: "shopee.technical_platform.sto.lurbromotest4"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.agent",
    object_name: "shopee.technical_platform.sto.mesos.agent"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.arvin3",
    object_name: "shopee.technical_platform.sto.mesos.arvin3"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.arvin4",
    object_name: "shopee.technical_platform.sto.mesos.arvin4"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.arvinss",
    object_name: "shopee.technical_platform.sto.mesos.arvinss"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.arvintwo",
    object_name: "shopee.technical_platform.sto.mesos.arvintwo"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.cache",
    object_name: "shopee.technical_platform.sto.mesos.cache"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.lb",
    object_name: "shopee.technical_platform.sto.mesos.lb"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.master",
    object_name: "shopee.technical_platform.sto.mesos.master"
  },
  {
    display_name: "shopee.technical_platform.sto.mesos.proxy",
    object_name: "shopee.technical_platform.sto.mesos.proxy"
  },
  {
    display_name: "shopee.technical_platform.sto.misc.web",
    object_name: "shopee.technical_platform.sto.misc.web"
  },
  {
    display_name: "shopee.technical_platform.sto.new.api",
    object_name: "shopee.technical_platform.sto.new.api"
  },
  {
    display_name: "shopee.technical_platform.sto.qa.testservice",
    object_name: "shopee.technical_platform.sto.qa.testservice"
  },
  {
    display_name: "shopee.technical_platform.sto.rbac.api",
    object_name: "shopee.technical_platform.sto.rbac.api"
  },
  {
    display_name: "shopee.technical_platform.sto.runonce.metacron",
    object_name: "shopee.technical_platform.sto.runonce.metacron"
  },
  {
    display_name: "shopee.technical_platform.sto.runonce.testimage",
    object_name: "shopee.technical_platform.sto.runonce.testimage"
  },
  {
    display_name: "shopee.technical_platform.sto.sam",
    object_name: "shopee.technical_platform.sto.sam"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.aa",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.aa"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.bb",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.bb"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.cc",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.cc"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.dddd",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.dddd"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.ff",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.ff"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.aa.xxxx",
    object_name: "shopee.technical_platform.sto.servicecmdb.aa.xxxx"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.abc.111",
    object_name: "shopee.technical_platform.sto.servicecmdb.abc.111"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.abc.aaa",
    object_name: "shopee.technical_platform.sto.servicecmdb.abc.aaa"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.abc.ccc",
    object_name: "shopee.technical_platform.sto.servicecmdb.abc.ccc"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.abc.dddd",
    object_name: "shopee.technical_platform.sto.servicecmdb.abc.dddd"
  },
  {
    display_name:
      "shopee.technical_platform.sto.servicecmdb.abc.testservicerelation",
    object_name:
      "shopee.technical_platform.sto.servicecmdb.abc.testservicerelation"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.api",
    object_name: "shopee.technical_platform.sto.servicecmdb.api"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.bb.cc",
    object_name: "shopee.technical_platform.sto.servicecmdb.bb.cc"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.cc.dd",
    object_name: "shopee.technical_platform.sto.servicecmdb.cc.dd"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.ee.ff",
    object_name: "shopee.technical_platform.sto.servicecmdb.ee.ff"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.gg.aa",
    object_name: "shopee.technical_platform.sto.servicecmdb.gg.aa"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.jj.dd",
    object_name: "shopee.technical_platform.sto.servicecmdb.jj.dd"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.quota.hardlimit",
    object_name: "shopee.technical_platform.sto.servicecmdb.quota.hardlimit"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.vv.cc",
    object_name: "shopee.technical_platform.sto.servicecmdb.vv.cc"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.zz.aa",
    object_name: "shopee.technical_platform.sto.servicecmdb.zz.aa"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.bb",
    object_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.bb"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.dd",
    object_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.dd"
  },
  {
    display_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.kk",
    object_name: "shopee.technical_platform.sto.servicecmdb.zz.zz.kk"
  },
  {
    display_name: "shopee.technical_platform.sto.skitest",
    object_name: "shopee.technical_platform.sto.skitest"
  },
  {
    display_name: "shopee.technical_platform.sto.skt.golang",
    object_name: "shopee.technical_platform.sto.skt.golang"
  },
  {
    display_name: "shopee.technical_platform.sto.skt.python",
    object_name: "shopee.technical_platform.sto.skt.python"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.grafana.server",
    object_name: "shopee.technical_platform.sto.smap.grafana.server"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group.service2",
    object_name: "shopee.technical_platform.sto.smap.group.service2"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group.service3",
    object_name: "shopee.technical_platform.sto.smap.group.service3"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group.service4",
    object_name: "shopee.technical_platform.sto.smap.group.service4"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group.service5",
    object_name: "shopee.technical_platform.sto.smap.group.service5"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group.service6",
    object_name: "shopee.technical_platform.sto.smap.group.service6"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group1.service",
    object_name: "shopee.technical_platform.sto.smap.group1.service"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group2.service",
    object_name: "shopee.technical_platform.sto.smap.group2.service"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group2.service1",
    object_name: "shopee.technical_platform.sto.smap.group2.service1"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.group3.service1",
    object_name: "shopee.technical_platform.sto.smap.group3.service1"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.jira",
    object_name: "shopee.technical_platform.sto.smap.jira"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.prometheus.prometheus",
    object_name: "shopee.technical_platform.sto.smap.prometheus.prometheus"
  },
  {
    display_name: "shopee.technical_platform.sto.smap.prometheus.test",
    object_name: "shopee.technical_platform.sto.smap.prometheus.test"
  },
  {
    display_name: "shopee.technical_platform.sto.smc.attest",
    object_name: "shopee.technical_platform.sto.smc.attest"
  },
  {
    display_name: "shopee.technical_platform.sto.smm.api",
    object_name: "shopee.technical_platform.sto.smm.api"
  },
  {
    display_name: "shopee.technical_platform.sto.smmmmnnn.apiiiinnnn",
    object_name: "shopee.technical_platform.sto.smmmmnnn.apiiiinnnn"
  },
  {
    display_name: "shopee.technical_platform.sto.smmmmnnnvvv.apiiiinnnnvv",
    object_name: "shopee.technical_platform.sto.smmmmnnnvvv.apiiiinnnnvv"
  },
  {
    display_name: "shopee.technical_platform.sto.srs.test111",
    object_name: "shopee.technical_platform.sto.srs.test111"
  },
  {
    display_name: "shopee.technical_platform.sto.srs.watcher",
    object_name: "shopee.technical_platform.sto.srs.watcher"
  },
  {
    display_name: "shopee.technical_platform.sto.ssssmmmm.apiiiii",
    object_name: "shopee.technical_platform.sto.ssssmmmm.apiiiii"
  },
  {
    display_name: "shopee.technical_platform.sto.ssssmmmm.hello",
    object_name: "shopee.technical_platform.sto.ssssmmmm.hello"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.api",
    object_name: "shopee.technical_platform.sto.swp.api"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.metaapi",
    object_name: "shopee.technical_platform.sto.swp.metaapi"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.osp1",
    object_name: "shopee.technical_platform.sto.swp.osp1"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.test",
    object_name: "shopee.technical_platform.sto.swp.test"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.test1",
    object_name: "shopee.technical_platform.sto.swp.test1"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.test10",
    object_name: "shopee.technical_platform.sto.swp.test10"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.test2",
    object_name: "shopee.technical_platform.sto.swp.test2"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.test3",
    object_name: "shopee.technical_platform.sto.swp.test3"
  },
  {
    display_name: "shopee.technical_platform.sto.swp.testfake4",
    object_name: "shopee.technical_platform.sto.swp.testfake4"
  },
  {
    display_name: "shopee.technical_platform.sto.swweb",
    object_name: "shopee.technical_platform.sto.swweb"
  },
  {
    display_name: "shopee.technical_platform.sto.test_annotations",
    object_name: "shopee.technical_platform.sto.test_annotations"
  },
  {
    display_name: "shopee.technical_platform.sto.test.api",
    object_name: "shopee.technical_platform.sto.test.api"
  },
  {
    display_name: "shopee.technical_platform.sto.test.diskquota",
    object_name: "shopee.technical_platform.sto.test.diskquota"
  },
  {
    display_name: "shopee.technical_platform.sto.testrename",
    object_name: "shopee.technical_platform.sto.testrename"
  },
  {
    display_name: "shopee.technical_platform.sto.tkr_test.backup",
    object_name: "shopee.technical_platform.sto.tkr_test.backup"
  },
  {
    display_name: "shopee.technical_platform.sto.tkr_test.test",
    object_name: "shopee.technical_platform.sto.tkr_test.test"
  },
  {
    display_name: "shopee.technical_platform.sto.tkr_test.test2",
    object_name: "shopee.technical_platform.sto.tkr_test.test2"
  },
  {
    display_name: "shopee.technical_platform.sto.tkr_test.test3",
    object_name: "shopee.technical_platform.sto.tkr_test.test3"
  },
  {
    display_name: "shopee.technical_platform.sto.tkr_test.worker",
    object_name: "shopee.technical_platform.sto.tkr_test.worker"
  },
  {
    display_name: "shopee.technical_platform.sto.uic.api",
    object_name: "shopee.technical_platform.sto.uic.api"
  },
  {
    display_name: "shopee.technical_platform.sto.yixinapitest",
    object_name: "shopee.technical_platform.sto.yixinapitest"
  },
  {
    display_name: "shopee.technical_platform.swp.abc",
    object_name: "shopee.technical_platform.swp.abc"
  },
  {
    display_name: "shopee.technical_platform.swp.test1",
    object_name: "shopee.technical_platform.swp.test1"
  },
  {
    display_name: "shopee.technical_platform.tc.api",
    object_name: "shopee.technical_platform.tc.api"
  },
  {
    display_name: "shopee.technical_platform.tc.test",
    object_name: "shopee.technical_platform.tc.test"
  },
  {
    display_name: "shopee.technical_platform.test.admin",
    object_name: "shopee.technical_platform.test.admin"
  },
  {
    display_name: "shopee.technical_platform.test.alb_api",
    object_name: "shopee.technical_platform.test.alb_api"
  },
  {
    display_name: "shopee.technical_platform.test.alex.smap",
    object_name: "shopee.technical_platform.test.alex.smap"
  },
  {
    display_name: "shopee.technical_platform.test.alex.test1",
    object_name: "shopee.technical_platform.test.alex.test1"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.tesdfsdf",
    object_name: "shopee.technical_platform.test.alex.testgroup1.tesdfsdf"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test1",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test1"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test2",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test2"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test3",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test3"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test4",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test4"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test5",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test5"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test6",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test6"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.test7",
    object_name: "shopee.technical_platform.test.alex.testgroup1.test7"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.testdomain",
    object_name: "shopee.technical_platform.test.alex.testgroup1.testdomain"
  },
  {
    display_name:
      "shopee.technical_platform.test.alex.testgroup1.testgroup1.testgroup.test2",
    object_name:
      "shopee.technical_platform.test.alex.testgroup1.testgroup1.testgroup.test2"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.testosp1",
    object_name: "shopee.technical_platform.test.alex.testgroup1.testosp1"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.testosp2",
    object_name: "shopee.technical_platform.test.alex.testgroup1.testosp2"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.testosp3",
    object_name: "shopee.technical_platform.test.alex.testgroup1.testosp3"
  },
  {
    display_name: "shopee.technical_platform.test.alex.testgroup1.testosp4",
    object_name: "shopee.technical_platform.test.alex.testgroup1.testosp4"
  },
  {
    display_name: "shopee.technical_platform.test.alex1",
    object_name: "shopee.technical_platform.test.alex1"
  },
  {
    display_name: "shopee.technical_platform.test.alextest",
    object_name: "shopee.technical_platform.test.alextest"
  },
  {
    display_name: "shopee.technical_platform.test.api",
    object_name: "shopee.technical_platform.test.api"
  },
  {
    display_name: "shopee.technical_platform.test.deploy.test",
    object_name: "shopee.technical_platform.test.deploy.test"
  },
  {
    display_name: "shopee.technical_platform.test.deploy.testosp16",
    object_name: "shopee.technical_platform.test.deploy.testosp16"
  },
  {
    display_name: "shopee.technical_platform.test.haotian_pic_test",
    object_name: "shopee.technical_platform.test.haotian_pic_test"
  },
  {
    display_name: "shopee.technical_platform.test.test",
    object_name: "shopee.technical_platform.test.test"
  },
  {
    display_name: "shopee.technical_platform.test.test_tooltips",
    object_name: "shopee.technical_platform.test.test_tooltips"
  },
  {
    display_name: "shopee.technical_platform.test.test3",
    object_name: "shopee.technical_platform.test.test3"
  },
  {
    display_name: "shopee.technical_platform.test.testabc",
    object_name: "shopee.technical_platform.test.testabc"
  },
  {
    display_name: "shopee.technical_platform.test.testosp1",
    object_name: "shopee.technical_platform.test.testosp1"
  },
  {
    display_name: "shopee.technical_platform.test.testosp10",
    object_name: "shopee.technical_platform.test.testosp10"
  },
  {
    display_name: "shopee.technical_platform.test.testosp11",
    object_name: "shopee.technical_platform.test.testosp11"
  },
  {
    display_name: "shopee.technical_platform.test.testosp14",
    object_name: "shopee.technical_platform.test.testosp14"
  },
  {
    display_name: "shopee.technical_platform.test.testosp15",
    object_name: "shopee.technical_platform.test.testosp15"
  },
  {
    display_name: "shopee.technical_platform.test.testosp17",
    object_name: "shopee.technical_platform.test.testosp17"
  },
  {
    display_name: "shopee.technical_platform.test.testosp18",
    object_name: "shopee.technical_platform.test.testosp18"
  },
  {
    display_name: "shopee.technical_platform.test.testosp19",
    object_name: "shopee.technical_platform.test.testosp19"
  },
  {
    display_name: "shopee.technical_platform.test.testosp2",
    object_name: "shopee.technical_platform.test.testosp2"
  },
  {
    display_name: "shopee.technical_platform.test.testosp20",
    object_name: "shopee.technical_platform.test.testosp20"
  },
  {
    display_name: "shopee.technical_platform.test.testosp21",
    object_name: "shopee.technical_platform.test.testosp21"
  },
  {
    display_name: "shopee.technical_platform.test.testosp22",
    object_name: "shopee.technical_platform.test.testosp22"
  },
  {
    display_name: "shopee.technical_platform.test.testosp24",
    object_name: "shopee.technical_platform.test.testosp24"
  },
  {
    display_name: "shopee.technical_platform.test.testosp25",
    object_name: "shopee.technical_platform.test.testosp25"
  },
  {
    display_name: "shopee.technical_platform.test.testosp26",
    object_name: "shopee.technical_platform.test.testosp26"
  },
  {
    display_name: "shopee.technical_platform.test.testosp27",
    object_name: "shopee.technical_platform.test.testosp27"
  },
  {
    display_name: "shopee.technical_platform.test.testosp28",
    object_name: "shopee.technical_platform.test.testosp28"
  },
  {
    display_name: "shopee.technical_platform.test.testosp29",
    object_name: "shopee.technical_platform.test.testosp29"
  },
  {
    display_name: "shopee.technical_platform.test.testosp3",
    object_name: "shopee.technical_platform.test.testosp3"
  },
  {
    display_name: "shopee.technical_platform.test.testosp4",
    object_name: "shopee.technical_platform.test.testosp4"
  },
  {
    display_name: "shopee.technical_platform.test.testosp5",
    object_name: "shopee.technical_platform.test.testosp5"
  },
  {
    display_name: "shopee.technical_platform.test.testosp6",
    object_name: "shopee.technical_platform.test.testosp6"
  },
  {
    display_name: "shopee.technical_platform.test.testosp7",
    object_name: "shopee.technical_platform.test.testosp7"
  },
  {
    display_name: "shopee.technical_platform.test.testosp8",
    object_name: "shopee.technical_platform.test.testosp8"
  },
  {
    display_name: "shopee.technical_platform.test.testosp9",
    object_name: "shopee.technical_platform.test.testosp9"
  },
  {
    display_name: "shopee.technical_platform.test.yulin",
    object_name: "shopee.technical_platform.test.yulin"
  },
  {
    display_name: "shopee.technical_platform.toctest.api",
    object_name: "shopee.technical_platform.toctest.api"
  },
  {
    display_name: "shopee.technical_platform.toctest.lixytest",
    object_name: "shopee.technical_platform.toctest.lixytest"
  },
  {
    display_name: "shopee.technical_platform.toctest.lixytest1",
    object_name: "shopee.technical_platform.toctest.lixytest1"
  },
  {
    display_name: "shopee.technical_platform.toctest.lixytest2",
    object_name: "shopee.technical_platform.toctest.lixytest2"
  },
  {
    display_name: "shopee.technical_platform.toctest.zhangshtest",
    object_name: "shopee.technical_platform.toctest.zhangshtest"
  },
  {
    display_name: "shopee.technical_platform.uselessbotosp.aa",
    object_name: "shopee.technical_platform.uselessbotosp.aa"
  },
  {
    display_name: "shopee.technical_platform.wsa.bass.centralsubscriber",
    object_name: "shopee.technical_platform.wsa.bass.centralsubscriber"
  },
  {
    display_name: "shopee.technical_platform.wsa.bass.item",
    object_name: "shopee.technical_platform.wsa.bass.item"
  },
  {
    display_name: "shopee.technical_platform.wsa.bass.subscriber",
    object_name: "shopee.technical_platform.wsa.bass.subscriber"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api",
    object_name: "shopee.technical_platform.wsa.mall.api"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api100060",
    object_name: "shopee.technical_platform.wsa.mall.api100060"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api100070",
    object_name: "shopee.technical_platform.wsa.mall.api100070"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api100080",
    object_name: "shopee.technical_platform.wsa.mall.api100080"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api100090",
    object_name: "shopee.technical_platform.wsa.mall.api100090"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1010",
    object_name: "shopee.technical_platform.wsa.mall.api1010"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1011",
    object_name: "shopee.technical_platform.wsa.mall.api1011"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1012",
    object_name: "shopee.technical_platform.wsa.mall.api1012"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1013",
    object_name: "shopee.technical_platform.wsa.mall.api1013"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1014",
    object_name: "shopee.technical_platform.wsa.mall.api1014"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1015",
    object_name: "shopee.technical_platform.wsa.mall.api1015"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1016",
    object_name: "shopee.technical_platform.wsa.mall.api1016"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1017",
    object_name: "shopee.technical_platform.wsa.mall.api1017"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1018",
    object_name: "shopee.technical_platform.wsa.mall.api1018"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api1019",
    object_name: "shopee.technical_platform.wsa.mall.api1019"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api2020",
    object_name: "shopee.technical_platform.wsa.mall.api2020"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api20201",
    object_name: "shopee.technical_platform.wsa.mall.api20201"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api20202",
    object_name: "shopee.technical_platform.wsa.mall.api20202"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api20203",
    object_name: "shopee.technical_platform.wsa.mall.api20203"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api20204",
    object_name: "shopee.technical_platform.wsa.mall.api20204"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api20205",
    object_name: "shopee.technical_platform.wsa.mall.api20205"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api222222",
    object_name: "shopee.technical_platform.wsa.mall.api222222"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api222222222",
    object_name: "shopee.technical_platform.wsa.mall.api222222222"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api2222222222",
    object_name: "shopee.technical_platform.wsa.mall.api2222222222"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api2222322",
    object_name: "shopee.technical_platform.wsa.mall.api2222322"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api2222324",
    object_name: "shopee.technical_platform.wsa.mall.api2222324"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api3333333",
    object_name: "shopee.technical_platform.wsa.mall.api3333333"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api4444",
    object_name: "shopee.technical_platform.wsa.mall.api4444"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api66",
    object_name: "shopee.technical_platform.wsa.mall.api66"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.api88",
    object_name: "shopee.technical_platform.wsa.mall.api88"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.apiv2",
    object_name: "shopee.technical_platform.wsa.mall.apiv2"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.bromoapi",
    object_name: "shopee.technical_platform.wsa.mall.bromoapi"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.bromometa",
    object_name: "shopee.technical_platform.wsa.mall.bromometa"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.coin2",
    object_name: "shopee.technical_platform.wsa.mall.coin2"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.createtest",
    object_name: "shopee.technical_platform.wsa.mall.createtest"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.david.test",
    object_name: "shopee.technical_platform.wsa.mall.david.test"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.empty",
    object_name: "shopee.technical_platform.wsa.mall.empty"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.new",
    object_name: "shopee.technical_platform.wsa.mall.new"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.test",
    object_name: "shopee.technical_platform.wsa.mall.test"
  },
  {
    display_name: "shopee.technical_platform.wsa.mall.ywtest123",
    object_name: "shopee.technical_platform.wsa.mall.ywtest123"
  },
  {
    display_name: "shopee.technical_platform.wsa.test.new",
    object_name: "shopee.technical_platform.wsa.test.new"
  },
  {
    display_name: "shopee.technical_platform.wsa.test.test",
    object_name: "shopee.technical_platform.wsa.test.test"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder13.abcd.new_service",
    object_name:
      "shopee.technical_platform.xiaodong.new_folder13.abcd.new_service"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder13.new_folder12.new_file01",
    object_name:
      "shopee.technical_platform.xiaodong.new_folder13.new_folder12.new_file01"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder13.new_folder12.new_folder14.new_file00",
    object_name:
      "shopee.technical_platform.xiaodong.new_folder13.new_folder12.new_folder14.new_file00"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder13.newtestforpj_team",
    object_name:
      "shopee.technical_platform.xiaodong.new_folder13.newtestforpj_team"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder13.test_pj_team",
    object_name: "shopee.technical_platform.xiaodong.new_folder13.test_pj_team"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.new_file7",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.new_file7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.new_file8",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.new_file8"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc0",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc0"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc1",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc1"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc10",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc10"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc2",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc20",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc20"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc3",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc4",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc4"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc5",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc5"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc6",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc6"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc7",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc8",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc8"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder7.qc9",
    object_name: "shopee.technical_platform.xiaodong.new_folder7.qc9"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.new_folder7.xd2.xd3.service",
    object_name:
      "shopee.technical_platform.xiaodong.new_folder7.xd2.xd3.service"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder9.new_file10",
    object_name: "shopee.technical_platform.xiaodong.new_folder9.new_file10"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_folder9.new_file9",
    object_name: "shopee.technical_platform.xiaodong.new_folder9.new_file9"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services",
    object_name: "shopee.technical_platform.xiaodong.new_services"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_eight",
    object_name: "shopee.technical_platform.xiaodong.new_services_eight"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_five",
    object_name: "shopee.technical_platform.xiaodong.new_services_five"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_one",
    object_name: "shopee.technical_platform.xiaodong.new_services_one"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_seven",
    object_name: "shopee.technical_platform.xiaodong.new_services_seven"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_six",
    object_name: "shopee.technical_platform.xiaodong.new_services_six"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_ten.nines",
    object_name: "shopee.technical_platform.xiaodong.new_services_ten.nines"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.new_services_three",
    object_name: "shopee.technical_platform.xiaodong.new_services_three"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osp.test.nine",
    object_name: "shopee.technical_platform.xiaodong.osp.test.nine"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osp.test.onetwo",
    object_name: "shopee.technical_platform.xiaodong.osp.test.onetwo"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osp.test.seven",
    object_name: "shopee.technical_platform.xiaodong.osp.test.seven"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osp.test.six",
    object_name: "shopee.technical_platform.xiaodong.osp.test.six"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osp.test.two",
    object_name: "shopee.technical_platform.xiaodong.osp.test.two"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.five",
    object_name: "shopee.technical_platform.xiaodong.osptest.five"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.four",
    object_name: "shopee.technical_platform.xiaodong.osptest.four"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.one",
    object_name: "shopee.technical_platform.xiaodong.osptest.one"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.seven",
    object_name: "shopee.technical_platform.xiaodong.osptest.seven"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.six",
    object_name: "shopee.technical_platform.xiaodong.osptest.six"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.three",
    object_name: "shopee.technical_platform.xiaodong.osptest.three"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest.two",
    object_name: "shopee.technical_platform.xiaodong.osptest.two"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest0one",
    object_name: "shopee.technical_platform.xiaodong.osptest0one"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.osptest11",
    object_name: "shopee.technical_platform.xiaodong.osptest11"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygroupexpiredtest",
    object_name: "shopee.technical_platform.xiaodong.policygroupexpiredtest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test2",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test2"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test3",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test3"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test4",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test4"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test5",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup.test5"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup2.test",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup2.test"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup2.test2",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup2.test2"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup3.test",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup3.test"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup4.test1",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newgroup4.test1"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.mutipledevsgsz",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.mutipledevsgsz"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test2",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test2"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test6",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test6"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test7",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.test7"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testintern",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testintern"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testmultipledev",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testmultipledev"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testnewhire",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testnewhire"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testsgszdev",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testsgszdev"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testsgszdev2",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testsgszdev2"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testszaccount",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.newtestgroup.testszaccount"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test1",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test1"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test2",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test3",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test4",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test4"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test5",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test5"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.policygrouptest.test6",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.test6"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.testadmin",
    object_name: "shopee.technical_platform.xiaodong.policygrouptest.testadmin"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.testnoviewpermission",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.testnoviewpermission"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.policygrouptest.testserviceviewonly",
    object_name:
      "shopee.technical_platform.xiaodong.policygrouptest.testserviceviewonly"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.new_folder.new_file3",
    object_name: "shopee.technical_platform.xiaodong.qc.new_folder.new_file3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.osptest2",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.osptest2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc24",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc24"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc25",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc25"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc26",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc26"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc27",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc27"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc28",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc28"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc29",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc29"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc30",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc30"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc31",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc31"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc32",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc32"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc33",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc33"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc34",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc34"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc35",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc35"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc36",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc36"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc37",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc37"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc38",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc38"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc39",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc39"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qc40",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qc40"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qcrename23",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qcrename23"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc.qcrename3",
    object_name: "shopee.technical_platform.xiaodong.qc.qc.qcrename3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc001",
    object_name: "shopee.technical_platform.xiaodong.qc.qc001"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc1",
    object_name: "shopee.technical_platform.xiaodong.qc.qc1"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc2",
    object_name: "shopee.technical_platform.xiaodong.qc.qc2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc21",
    object_name: "shopee.technical_platform.xiaodong.qc.qc21"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc3",
    object_name: "shopee.technical_platform.xiaodong.qc.qc3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.qc4",
    object_name: "shopee.technical_platform.xiaodong.qc.qc4"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.testwithnewalb",
    object_name: "shopee.technical_platform.xiaodong.qc.testwithnewalb"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd1",
    object_name: "shopee.technical_platform.xiaodong.qc.xd1"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd2",
    object_name: "shopee.technical_platform.xiaodong.qc.xd2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd3",
    object_name: "shopee.technical_platform.xiaodong.qc.xd3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd4",
    object_name: "shopee.technical_platform.xiaodong.qc.xd4"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd5",
    object_name: "shopee.technical_platform.xiaodong.qc.xd5"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd6",
    object_name: "shopee.technical_platform.xiaodong.qc.xd6"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc.xd7",
    object_name: "shopee.technical_platform.xiaodong.qc.xd7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc3rename",
    object_name: "shopee.technical_platform.xiaodong.qc3rename"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc4",
    object_name: "shopee.technical_platform.xiaodong.qc4"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc5",
    object_name: "shopee.technical_platform.xiaodong.qc5"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc6",
    object_name: "shopee.technical_platform.xiaodong.qc6"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc7",
    object_name: "shopee.technical_platform.xiaodong.qc7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc8",
    object_name: "shopee.technical_platform.xiaodong.qc8"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qc9",
    object_name: "shopee.technical_platform.xiaodong.qc9"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc1",
    object_name: "shopee.technical_platform.xiaodong.qcc1"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc10",
    object_name: "shopee.technical_platform.xiaodong.qcc10"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc11",
    object_name: "shopee.technical_platform.xiaodong.qcc11"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc2",
    object_name: "shopee.technical_platform.xiaodong.qcc2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc3",
    object_name: "shopee.technical_platform.xiaodong.qcc3"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc6",
    object_name: "shopee.technical_platform.xiaodong.qcc6"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc7",
    object_name: "shopee.technical_platform.xiaodong.qcc7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc8",
    object_name: "shopee.technical_platform.xiaodong.qcc8"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcc9",
    object_name: "shopee.technical_platform.xiaodong.qcc9"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qcrename",
    object_name: "shopee.technical_platform.xiaodong.qcrename"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.qctest1.qctest2.qc11",
    object_name: "shopee.technical_platform.xiaodong.qctest1.qctest2.qc11"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.test",
    object_name: "shopee.technical_platform.xiaodong.test"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.test_osp_pj_multiple_dev",
    object_name: "shopee.technical_platform.xiaodong.test_osp_pj_multiple_dev"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodong.test_pj_team_without_sre_postfix",
    object_name:
      "shopee.technical_platform.xiaodong.test_pj_team_without_sre_postfix"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.test_service_dev",
    object_name: "shopee.technical_platform.xiaodong.test_service_dev"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd0",
    object_name: "shopee.technical_platform.xiaodong.xd0"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd2",
    object_name: "shopee.technical_platform.xiaodong.xd2"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd5",
    object_name: "shopee.technical_platform.xiaodong.xd5"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd6",
    object_name: "shopee.technical_platform.xiaodong.xd6"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd7",
    object_name: "shopee.technical_platform.xiaodong.xd7"
  },
  {
    display_name: "shopee.technical_platform.xiaodong.xd8",
    object_name: "shopee.technical_platform.xiaodong.xd8"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.b.c",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.b.c"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc12",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc12"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc13",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc13"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc2andrename",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc2andrename"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc3",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc3"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc4",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc4"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc5",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc5"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc6",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc6"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc8",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc8"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qc9",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qc9"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.qicheng1",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.qicheng1"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xd4",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xd4"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xd5",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xd5"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.albtest",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.albtest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.anotherround",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.anotherround"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.fulltest",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.fulltest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.newosptest4",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.newosptest4"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.osptest3",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.osptest3"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.quotaon1",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.quotaon1"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3_quotation4",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3_quotation4"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3quataon",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3quataon"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3quotationoff",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.s3quotationoff"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.singleservice",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.singleservice"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.sj",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.sj"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.testalb",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.testalb"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.testnewdomain",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.testnewdomain"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.testospalb",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.testospalb"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd1",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd1"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd10",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd10"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd100",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd100"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd101",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd101"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd12",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd12"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd2",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd2"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd7",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xd7"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.xdquotaoff",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xdbot.xdquotaoff"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xdtest",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xdbot.xdtest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xiaodongosptest",
    object_name: "shopee.technical_platform.xiaodongtest_five.a.xiaodongosptest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.a.xiaodongosptest1",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.a.xiaodongosptest1"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.deployaimagefalse",
    object_name: "shopee.technical_platform.xiaodongtest_five.deployaimagefalse"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.albwithdns",
    object_name: "shopee.technical_platform.xiaodongtest_five.new_qx.albwithdns"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.finaltest",
    object_name: "shopee.technical_platform.xiaodongtest_five.new_qx.finaltest"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.news.new_service",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.news.new_service"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.new_qx.news.qc2",
    object_name: "shopee.technical_platform.xiaodongtest_five.new_qx.news.qc2"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.new_qx.testalb",
    object_name: "shopee.technical_platform.xiaodongtest_five.new_qx.testalb"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testalbwithpudns",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testalbwithpudns"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testospwithoutdns",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testospwithoutdns"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testospwithpublicdns",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.new_qx.testospwithpublicdns"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.new_services_two",
    object_name: "shopee.technical_platform.xiaodongtest_five.new_services_two"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.qc12",
    object_name: "shopee.technical_platform.xiaodongtest_five.qc12"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.qc3",
    object_name: "shopee.technical_platform.xiaodongtest_five.qc3"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.sj",
    object_name: "shopee.technical_platform.xiaodongtest_five.sj"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.sj1",
    object_name: "shopee.technical_platform.xiaodongtest_five.sj1"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.sj2",
    object_name: "shopee.technical_platform.xiaodongtest_five.sj2"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.spexbinding",
    object_name: "shopee.technical_platform.xiaodongtest_five.spexbinding"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.test",
    object_name: "shopee.technical_platform.xiaodongtest_five.test"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.test_move",
    object_name: "shopee.technical_platform.xiaodongtest_five.test_move"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.test_move_group",
    object_name: "shopee.technical_platform.xiaodongtest_five.test_move_group"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testjenkins",
    object_name: "shopee.technical_platform.xiaodongtest_five.testjenkins"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testjenlins",
    object_name: "shopee.technical_platform.xiaodongtest_five.testjenlins"
  },
  {
    display_name:
      "shopee.technical_platform.xiaodongtest_five.testmove.test_move_group.new_services_fours",
    object_name:
      "shopee.technical_platform.xiaodongtest_five.testmove.test_move_group.new_services_fours"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testrename",
    object_name: "shopee.technical_platform.xiaodongtest_five.testrename"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testsj",
    object_name: "shopee.technical_platform.xiaodongtest_five.testsj"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testtoc",
    object_name: "shopee.technical_platform.xiaodongtest_five.testtoc"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.testtoremove3",
    object_name: "shopee.technical_platform.xiaodongtest_five.testtoremove3"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd11",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd11"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd12",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd12"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd13",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd13"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd14",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd14"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd4",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd4"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd5",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd5"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd6",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd6"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd7",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd7"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd8",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd8"
  },
  {
    display_name: "shopee.technical_platform.xiaodongtest_five.xd9",
    object_name: "shopee.technical_platform.xiaodongtest_five.xd9"
  },
  {
    display_name: "shopee.technical_platform.yewen.test",
    object_name: "shopee.technical_platform.yewen.test"
  },
  {
    display_name: "shopee.technical_platform.yewen.test5.test10",
    object_name: "shopee.technical_platform.yewen.test5.test10"
  },
  {
    display_name: "shopee.technical_platform.yewen.test5.test7.test8",
    object_name: "shopee.technical_platform.yewen.test5.test7.test8"
  },
  {
    display_name:
      "shopee.technical_platform.yewen.test9.test01.test02.test03.test04",
    object_name:
      "shopee.technical_platform.yewen.test9.test01.test02.test03.test04"
  },
  {
    display_name: "shopee.technical_platform.yewen.test9.test01.test02.test2",
    object_name: "shopee.technical_platform.yewen.test9.test01.test02.test2"
  },
  {
    display_name: "shopee.technical_platform.yewen.test9.test01.test02.test3",
    object_name: "shopee.technical_platform.yewen.test9.test01.test02.test3"
  },
  {
    display_name: "shopee.technical_platform.yewen.test9.test01.test02.test4",
    object_name: "shopee.technical_platform.yewen.test9.test01.test02.test4"
  },
  {
    display_name: "shopee.technical_platform.yewen.test9.test01.test02.test6",
    object_name: "shopee.technical_platform.yewen.test9.test01.test02.test6"
  },
  {
    display_name: "shopee.technical_platform.yltest.test.api",
    object_name: "shopee.technical_platform.yltest.test.api"
  },
  {
    display_name: "shopee.technical_platform.yltest.testify.api",
    object_name: "shopee.technical_platform.yltest.testify.api"
  },
  {
    display_name: "shopee.technical_platform.yltest.yl",
    object_name: "shopee.technical_platform.yltest.yl"
  },
  {
    display_name: "shopee.technical_platform.yuri1.a",
    object_name: "shopee.technical_platform.yuri1.a"
  },
  {
    display_name: "shopee.technical_platform.ywtest.test01",
    object_name: "shopee.technical_platform.ywtest.test01"
  },
  {
    display_name: "shopee.technical_platform.zqtest.new",
    object_name: "shopee.technical_platform.zqtest.new"
  },
  {
    display_name: "shopee.technical_platform.zqtest.new2",
    object_name: "shopee.technical_platform.zqtest.new2"
  },
  {
    display_name: "shopee.technical_platform.zytest.test1",
    object_name: "shopee.technical_platform.zytest.test1"
  },
  {
    display_name: "shopee.technical_platform.zytest.test2",
    object_name: "shopee.technical_platform.zytest.test2"
  },
  {
    display_name: "shopee.technical_platform.zytest.test3",
    object_name: "shopee.technical_platform.zytest.test3"
  },
  {
    display_name: "shopee.technical_platform.zytest.test4",
    object_name: "shopee.technical_platform.zytest.test4"
  },
  {
    display_name: "shopee.technical_platform.zytest.test5",
    object_name: "shopee.technical_platform.zytest.test5"
  },
  {
    display_name: "shopee.technical_platform.zytest.test6",
    object_name: "shopee.technical_platform.zytest.test6"
  },
  {
    display_name: "shopee.technical_platform.zytest.test7",
    object_name: "shopee.technical_platform.zytest.test7"
  },
  {
    display_name: "shopee.technical_platform.zytest.test8",
    object_name: "shopee.technical_platform.zytest.test8"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test1",
    object_name: "shopee.technical_platform.zytest2.test1"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test2",
    object_name: "shopee.technical_platform.zytest2.test2"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test3",
    object_name: "shopee.technical_platform.zytest2.test3"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test4",
    object_name: "shopee.technical_platform.zytest2.test4"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test5",
    object_name: "shopee.technical_platform.zytest2.test5"
  },
  {
    display_name: "shopee.technical_platform.zytest2.test6",
    object_name: "shopee.technical_platform.zytest2.test6"
  },
  {
    display_name: "shopee.technical_platform.zytest3.test1",
    object_name: "shopee.technical_platform.zytest3.test1"
  },
  {
    display_name: "shopee.test01.test02.test",
    object_name: "shopee.test01.test02.test"
  },
  {
    display_name: "shopee.tkr.tkr_test",
    object_name: "shopee.tkr.tkr_test"
  },
  {
    display_name: "shopee.to_c.live_streaming.live.adminjob",
    object_name: "shopee.to_c.live_streaming.live.adminjob"
  },
  {
    display_name: "shopee.to_c.uncategorised.a.bbbbb",
    object_name: "shopee.to_c.uncategorised.a.bbbbb"
  },
  {
    display_name: "shopee.wl.abc",
    object_name: "shopee.wl.abc"
  },
  {
    display_name: "shopee.ywtest.test01",
    object_name: "shopee.ywtest.test01"
  },
  {
    display_name: "shopee.zctest.toc",
    object_name: "shopee.zctest.toc"
  },
  {
    display_name: "shopee.zctest.toc2toc2",
    object_name: "shopee.zctest.toc2toc2"
  },
  {
    display_name: "swweb.shengweitcp",
    object_name: "swweb.shengweitcp"
  },
  {
    display_name: "swweb.swweb",
    object_name: "swweb.swweb"
  }
];

test("should ", () => {
  const d = data.map(item => item["display_name"].split("."));
  const tree = new TrieTree(d);
  expect(tree.toArray()).toBe(0);
});
