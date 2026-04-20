$ErrorActionPreference = "Stop"
$base = "C:\Users\Dell M4800\Downloads\DE_AN_MEKONG"
$web = "$base\mekong-presentation\public\images"
$brochure = "$base\DE_AN_MEKONG_V3\BROCHURE"
$hinh = "$base\DE_AN_MEKONG_V3\HINH ANH"
$stitch = "$brochure\ASSETS_PREMIUM\STITCH_OUTPUT"
$premium = "$brochure\ASSETS_PREMIUM"

# Create subdirs
$dirs = @(
    "products/ddc", "products/module-io",
    "software/mekongbms", "software/mekongfleet", "software/mekongstudio",
    "robot/amr", "robot/agv",
    "diagrams/architecture", "diagrams/connection"
)
foreach ($d in $dirs) {
    $p = Join-Path $web ($d -replace '/', '\')
    if (-not (Test-Path $p)) { New-Item -ItemType Directory -Force -Path $p | Out-Null }
}
Write-Output "=== Directories created ==="

$copied = 0
function SafeCopy($src, $dst) {
    if (Test-Path $src) {
        Copy-Item $src $dst -Force
        $script:copied++
        Write-Output "  OK: $(Split-Path $dst -Leaf)"
    } else {
        Write-Output "  SKIP (not found): $src"
    }
}

# === 1. DDC Controllers ===
Write-Output "`n--- DDC Controllers ---"
$bms = "$brochure\10_ASSETS\01_PRODUCT_IMAGES\BMS_CONTROLLER"
SafeCopy "$bms\KX-DDC-24.png" "$web\products\ddc\kx-ddc-24.png"
SafeCopy "$bms\HERO KX-DDC-24.png" "$web\products\ddc\kx-ddc-24-hero.png"
SafeCopy "$bms\KX-DDC-32.png" "$web\products\ddc\kx-ddc-32.png"
SafeCopy "$bms\HERO KX-DDC-32.png" "$web\products\ddc\kx-ddc-32-hero.png"
SafeCopy "$bms\KX-DDC-64.png" "$web\products\ddc\kx-ddc-64.png"
SafeCopy "$bms\DDC SYSTERM.png" "$web\products\ddc\ddc-system.png"
SafeCopy "$bms\Selection Guide.png" "$web\products\ddc\ddc-selection-guide.png"
# DDC wiring diagrams
SafeCopy "$bms\KX-DDC-24 wiring.png" "$web\products\ddc\kx-ddc-24-wiring.png"
SafeCopy "$bms\KX-DDC-32wiring.png" "$web\products\ddc\kx-ddc-32-wiring.png"
SafeCopy "$bms\KX-DDC-64 wiring.png" "$web\products\ddc\kx-ddc-64-wiring.png"

# === 2. Module I/O ===
Write-Output "`n--- Module I/O ---"
$modio = "$brochure\10_ASSETS\01_PRODUCT_IMAGES\MODULE_IO"
SafeCopy "$modio\KX-EIO-DI16.png" "$web\products\module-io\kx-eio-di16.png"
SafeCopy "$modio\KX_EIO_DI16_render.png" "$web\products\module-io\kx-eio-di16-render.png"
SafeCopy "$bms\module_8_di_8_do_modbus_tcp.png" "$web\products\module-io\module-8di-8do.png"
# CKDZ physical modules
$ckdz = "$premium\CKDZ_MODULES"
SafeCopy "$ckdz\CK-3083E_1.jpg" "$web\products\module-io\ck-3083e.jpg"
SafeCopy "$ckdz\CK-3083R_1.jpg" "$web\products\module-io\ck-3083r.jpg"
SafeCopy "$ckdz\CK-7041R_1.jpg" "$web\products\module-io\ck-7041r.jpg"
SafeCopy "$ckdz\CK-7082R_1.jpg" "$web\products\module-io\ck-7082r.jpg"

# === 3. Software - MekongBMS Stitch UI ===
Write-Output "`n--- MekongBMS Stitch UI ---"
$bmsui = "$stitch\2026-04-09_mekongbms_product_ui"
SafeCopy "$bmsui\overview-dashboard-operator-v4.png" "$web\software\mekongbms\dashboard-overview.png"
SafeCopy "$bmsui\alarm-center-operator-v4.png" "$web\software\mekongbms\alarm-center.png"
SafeCopy "$bmsui\energy-analytics-operator-v4.png" "$web\software\mekongbms\energy-analytics.png"
SafeCopy "$bmsui\equipment-control-operator-v4.png" "$web\software\mekongbms\equipment-control.png"
SafeCopy "$bmsui\interactive-floor-plan-operator-v4.png" "$web\software\mekongbms\floor-plan.png"

# === 4. Software - MekongFleet Stitch UI ===
Write-Output "`n--- MekongFleet Stitch UI ---"
$fleetui = "$stitch\2026-04-09_mekongfleet_ui"
SafeCopy "$fleetui\dashboard-overview-FHD.png" "$web\software\mekongfleet\dashboard-overview.png"
SafeCopy "$fleetui\live-traffic-map-FHD.png" "$web\software\mekongfleet\live-traffic-map.png"
SafeCopy "$fleetui\robot-detail-FHD.png" "$web\software\mekongfleet\robot-detail.png"
SafeCopy "$fleetui\robot-fleet-list-FHD.png" "$web\software\mekongfleet\fleet-list.png"
SafeCopy "$fleetui\task-management-FHD.png" "$web\software\mekongfleet\task-management.png"

# === 5. Software - MekongStudio ===
Write-Output "`n--- MekongStudio ---"
$sw = "$brochure\10_ASSETS\01_PRODUCT_IMAGES\SOFTWARE"
SafeCopy "$sw\KinexusStudio FBD Editor.png" "$web\software\mekongstudio\fbd-editor.png"
SafeCopy "$sw\KinexusStudio_hero.png" "$web\software\mekongstudio\studio-hero.png"

# === 6. Robot AMR additional ===
Write-Output "`n--- Robot AMR ---"
$robot = "$brochure\10_ASSETS\01_PRODUCT_IMAGES\ROBOT"
SafeCopy "$robot\AMR500_render_iso.png" "$web\robot\amr\amr-500-iso.png"
SafeCopy "$robot\AMR1000_forklift_render.jpg" "$web\robot\amr\amr-1000-forklift.jpg"
SafeCopy "$robot\AGV500_undercarriage_render.jpg" "$web\robot\agv\agv-500-undercarriage.jpg"
# Processed in-context images
$proc_ctx = "$hinh\08_DA_XU_LY\02_SAN_PHAM_CO_BOI_CANH"
SafeCopy "$proc_ctx\amr_chui_gam_nha_kho.png" "$web\robot\amr\amr-warehouse-undercarriage.png"
SafeCopy "$proc_ctx\amr_nen_thap_nha_kho.png" "$web\robot\amr\amr-warehouse-lowprofile.png"
# Processed clean product images
$proc_clean = "$hinh\08_DA_XU_LY\01_SAN_PHAM_TINH"
SafeCopy "$proc_clean\amr_chui_gam_tinh.png" "$web\robot\amr\amr-undercarriage-clean.png"
SafeCopy "$proc_clean\amr_nen_thap_tinh.png" "$web\robot\amr\amr-lowprofile-clean.png"

# === 7. Gateway in-context (processed) ===
Write-Output "`n--- Gateway in-context ---"
SafeCopy "$proc_ctx\gateway_iot_mk200_boi_canh.png" "$web\products\kx200-gateway-context.png"
SafeCopy "$proc_ctx\gateway_iot_mk300_boi_canh.png" "$web\products\kx300-gateway-context.png"

# === 8. Architecture SVG diagrams ===
Write-Output "`n--- Architecture SVGs ---"
$arch = "$premium\03_DIAGRAMS\architecture"
$conn = "$premium\03_DIAGRAMS\connection"
$wf = "$premium\03_DIAGRAMS\workflow"
SafeCopy "$arch\iot_gateway_architecture.svg" "$web\diagrams\architecture\iot-gateway-architecture.svg"
SafeCopy "$arch\bms_controller_architecture.svg" "$web\diagrams\architecture\bms-controller-architecture.svg"
SafeCopy "$arch\kinexusbms_architecture.svg" "$web\diagrams\architecture\kinexusbms-architecture.svg"
SafeCopy "$arch\kinexusfleet_architecture.svg" "$web\diagrams\architecture\kinexusfleet-architecture.svg"
SafeCopy "$arch\kinexusscada_architecture.svg" "$web\diagrams\architecture\kinexusscada-architecture.svg"
SafeCopy "$conn\kx200_connection.svg" "$web\diagrams\connection\kx200-connection.svg"
SafeCopy "$conn\kx300_connection.svg" "$web\diagrams\connection\kx300-connection.svg"
SafeCopy "$conn\io_expansion_modules.svg" "$web\diagrams\connection\io-expansion-modules.svg"
SafeCopy "$conn\ddc64_wiring.svg" "$web\diagrams\connection\ddc64-wiring.svg"
SafeCopy "$wf\bms_control_loop.svg" "$web\diagrams\architecture\bms-control-loop.svg"
SafeCopy "$wf\amr_fleet_workflow.svg" "$web\diagrams\architecture\amr-fleet-workflow.svg"

# === 9. System diagrams from HINH ANH ===
Write-Output "`n--- System diagrams ---"
$sysdiag = "$hinh\03_SO_DO_HE_THONG"
SafeCopy "$sysdiag\so_do_ket_noi_iot_tu_thiet_bi_den_dam_may_01.png" "$web\diagrams\iot-connectivity-diagram.png"
SafeCopy "$sysdiag\so_do_mang_cong_nghiep_cam_bien_len_dam_may_01.png" "$web\diagrams\industrial-network-diagram.png"
SafeCopy "$sysdiag\he_sinh_thai_san_pham_amr_agv_oht.png" "$web\diagrams\robot-ecosystem-diagram.png"

Write-Output "`n=== TOTAL COPIED: $copied files ==="
